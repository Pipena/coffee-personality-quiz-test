'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { questions, personalities, PersonalityType } from './data/quizData';
import { supabase } from './lib/supabase';

type Screen = 'welcome' | 'quiz' | 'result';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityType, number>>({
    bold: 0,
    cozy: 0,
    sweet: 0,
    indulgent: 0,
  });

  const handleStart = () => {
    setScreen('quiz');
    setCurrentQuestion(0);
    setScores({ bold: 0, cozy: 0, sweet: 0, indulgent: 0 });
  };

  const handleAnswer = (personality: PersonalityType) => {
    const newScores = { ...scores, [personality]: scores[personality] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('result');
    }
  };

  const getResult = (): PersonalityType => {
    let maxScore = 0;
    let result: PersonalityType = 'bold';

    (Object.keys(scores) as PersonalityType[]).forEach((key) => {
      if (scores[key] > maxScore) {
        maxScore = scores[key];
        result = key;
      }
    });

    return result;
  };

  // Track result to Supabase
  useEffect(() => {
    if (screen === 'result') {
      const personality = getResult();
      supabase.from('quiz_results').insert({ personality }).then();
    }
  }, [screen]);

  // Welcome Screen
  if (screen === 'welcome') {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="coffee-decoration" style={{ textAlign: 'center' }}>☕</div>
          <h1 className="quiz-title">Find Your Perfect Brew</h1>
          <p className="quiz-subtitle">
            Answer 5 quick questions to discover your perfect brew
          </p>
          <button className="start-button" onClick={handleStart}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (screen === 'quiz') {
    const question = questions[currentQuestion];

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <p className="question-text">{question.question}</p>

          {question.answers.map((answer, index) => (
            <div
              key={index}
              className="answer-option"
              onClick={() => handleAnswer(answer.personality)}
            >
              <span className="answer-icon">{answer.icon}</span>
              <span>{answer.text}</span>
            </div>
          ))}

          <div className="progress-bar">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${index <= currentQuestion ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  const resultType = getResult();
  const result = personalities[resultType];

  return (
    <div className="quiz-container">
      <div className="quiz-card result-card">
        <Image
          src={result.image}
          alt={result.coffee}
          width={200}
          height={200}
          className="result-image"
        />
        <h2 className="result-personality">You&apos;re a {result.name}!</h2>
        <p className="result-tagline">&quot;{result.tagline}&quot;</p>

        <div className="result-coffee">
          <p className="result-coffee-label">Your perfect coffee:</p>
          <p className="result-coffee-name">{result.coffee}</p>
        </div>

        <button
          className="share-button"
          onClick={() => {
            const text = `I'm a ${result.name}! My perfect coffee is ${result.coffee}. Take the quiz and find your brew!`;
            const url = window.location.href;
            if (navigator.share) {
              navigator.share({ title: 'My Coffee Personality', text, url });
            } else {
              navigator.clipboard.writeText(`${text} ${url}`);
              alert('Copied to clipboard!');
            }
          }}
        >
          Share My Result
        </button>
        <button className="retake-button" onClick={handleStart}>
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}
