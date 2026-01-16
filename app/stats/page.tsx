'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { personalities } from '../data/quizData';

type Stats = {
  personality: string;
  count: number;
  percentage: number;
};

export default function StatsPage() {
  const [stats, setStats] = useState<Stats[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const { data } = await supabase
        .from('quiz_results')
        .select('personality');

      if (data) {
        const counts: Record<string, number> = {};
        data.forEach((row) => {
          counts[row.personality] = (counts[row.personality] || 0) + 1;
        });

        const total = data.length;
        setTotal(total);

        const statsArray = Object.entries(counts)
          .map(([personality, count]) => ({
            personality,
            count,
            percentage: total > 0 ? Math.round((count / total) * 100) : 0,
          }))
          .sort((a, b) => b.count - a.count);

        setStats(statsArray);
      }
      setLoading(false);
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <p>Loading stats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h1 className="quiz-title">Quiz Analytics</h1>
        <p className="quiz-subtitle">{total} people have taken the quiz</p>

        <div style={{ marginTop: '30px' }}>
          {stats.map((stat) => {
            const personality = personalities[stat.personality as keyof typeof personalities];
            return (
              <div key={stat.personality} className="stat-row">
                <div className="stat-info">
                  <span className="stat-name">{personality?.name || stat.personality}</span>
                  <span className="stat-count">{stat.count} ({stat.percentage}%)</span>
                </div>
                <div className="stat-bar-bg">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <a href="/" className="retake-button" style={{ marginTop: '30px', textDecoration: 'none', display: 'inline-block' }}>
          Take the Quiz
        </a>
      </div>
    </div>
  );
}
