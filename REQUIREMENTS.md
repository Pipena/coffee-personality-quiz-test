# Coffee Personality Quiz - Requirements

## Overview
A "What's Your Coffee Personality?" quiz that recommends a coffee drink based on personality type. Users answer fun lifestyle questions and get matched with their ideal coffee.

---

## Personality → Coffee Pairings (4 Results)

| Personality | Coffee | Tagline | Image |
|-------------|--------|---------|-------|
| **Bold Adventurer** | Double Espresso | "You live for intensity" | espresso.jpg |
| **Cozy Classic** | Medium Roast Drip | "Comfort in every cup" | cozy-coffee.jpg |
| **Sweet Enthusiast** | Caramel Latte | "Life's too short for bitter" | caramel-latte.jpg |
| **Indulgent Treat** | Mocha with Whip | "Coffee is dessert" | mocha.jpg |

---

## Result Display Style
**Single recommendation** - Show only the top matching personality.

Example: "You're a Bold Adventurer! Your coffee: Double Espresso."

---

## Visual Style
**Warm & Cozy**
- Earth tones (browns, creams, warm neutrals)
- Soft gradients
- Rounded corners
- Inviting, coffee-shop feel
- Serif fonts for headings, clean sans-serif for body

---

## Visual Elements
- ✅ **Images** - Each result shows a photo of the recommended coffee
- ✅ **Icons** - Each answer option has an emoji icon

---

## Quiz Questions (5 Questions)

### Q1: What's your ideal weekend morning?
| Answer | Icon | Maps To |
|--------|------|---------|
| Up early for an adventure | ☀️ | Bold Adventurer |
| Slow start with a book | 📖 | Cozy Classic |
| Brunch with friends | 🥐 | Sweet Enthusiast |
| Sleeping in + treats | 🛏️ | Indulgent Treat |

### Q2: Pick a vacation style:
| Answer | Icon | Maps To |
|--------|------|---------|
| Backpacking through mountains | 🏔️ | Bold Adventurer |
| Cozy cabin in the woods | 🏡 | Cozy Classic |
| Beach resort with cocktails | 🏖️ | Sweet Enthusiast |
| Luxury hotel with room service | 🏨 | Indulgent Treat |

### Q3: It's Friday night. You're most likely:
| Answer | Icon | Maps To |
|--------|------|---------|
| At a concert or event | 🎸 | Bold Adventurer |
| Movie night at home | 🍿 | Cozy Classic |
| Dinner party with friends | 🍷 | Sweet Enthusiast |
| Bubble bath and dessert | 🛁 | Indulgent Treat |

### Q4: How do you handle a stressful day?
| Answer | Icon | Maps To |
|--------|------|---------|
| Intense workout | 🏃 | Bold Adventurer |
| Quiet time with tea/coffee | ☕ | Cozy Classic |
| Vent to a friend | 📱 | Sweet Enthusiast |
| Comfort food and Netflix | 🍫 | Indulgent Treat |

### Q5: Pick a superpower:
| Answer | Icon | Maps To |
|--------|------|---------|
| Super strength | ⚡ | Bold Adventurer |
| Mind reading | 🔮 | Cozy Classic |
| Charm everyone you meet | 💫 | Sweet Enthusiast |
| Stop time (for naps) | ⏰ | Indulgent Treat |

---

## Quiz Logic
1. User answers 5 questions
2. Each answer adds 1 point to its mapped personality
3. At the end, tally points for each personality
4. Display the personality with the most points
5. If tie, pick the first one selected

---

## Tech Stack
- Next.js (React framework)
- JavaScript
- CSS for styling (warm & cozy theme)
