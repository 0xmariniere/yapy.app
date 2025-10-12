# 🗣️ yapy.app

**convos that hit**

yapy.app is a beautifully designed conversation starter app that helps people connect through meaningful, fun, or thought-provoking discussions. Using digital "cards" with curated questions, users can find inspiration for conversations with friends, partners, or groups.

Designed to sit face-up in the middle of the table, yapy.app brings human connection back into focus — through intentional design, elegant simplicity, and engaging prompts.

---

## ✨ Features

- **4 Curated Categories**
  - 🤝 **FRENS** - spark new takes
  - 💕 **BABE** - evolve ur relationship
  - 🤔 **DEEP** - go philosophical
  - 🔥 **UNFILTERED** - pillow talk

- **Interactive Card Experience**
  - Swipe or tap to navigate between cards
  - Skip cards you don't want to discuss
  - Progress tracking through each category
  - Smooth animations and transitions

- **Discussion Timer**
  - Set timers for 5, 10, or 15 minutes
  - Visual countdown with progress bar
  - Gentle notification when time's up
  - Pause and resume functionality

- **Beautiful Design**
  - Dark mode by default
  - Blended gradient backgrounds
  - Minimal, distraction-free interface
  - Responsive design for all devices

- **Accessibility First**
  - WCAG compliant color contrast
  - Full keyboard navigation
  - Screen reader support
  - Reduced motion support
  - Touch-optimized controls

---

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data**: JSON-based storage
- **Deployment**: Vercel-ready

---

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd chattr
```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🏗️ Project Structure

```
yapy-app/
├── app/
│   ├── api/
│   │   ├── cards/        # API endpoint for cards
│   │   └── tags/         # API endpoint for tags
│   ├── cards/
│   │   └── [category]/   # Dynamic category pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── CategoryCard.tsx  # Category selection card
│   ├── ConversationCard.tsx  # Question card
│   └── Timer.tsx         # Discussion timer
├── data/
│   └── cards.json        # Card data
├── hooks/
│   ├── useCards.ts       # Fetch cards hook
│   ├── useSwipe.ts       # Swipe gesture hook
│   └── useTimer.ts       # Timer logic hook
├── lib/
│   └── categories.ts     # Category configuration
├── types/
│   └── index.ts          # TypeScript types
└── Documentation/
    ├── PRD.md
    ├── TechnicalDocument.md
    └── UX.md
```

---

## 📝 Adding New Cards

Cards are stored in `/data/cards.json`. Each card has:

```json
{
  "id": "c_001",
  "prompt": "What's the most spontaneous thing you've ever done?",
  "tags": ["friends", "light", "fun"]
}
```

### Card Schema

- **id**: Unique identifier (e.g., `c_001`)
- **prompt**: The conversation question
- **tags**: Array of category and descriptor tags
  - Category tags: `friends`, `couples`, `philosophical`, `spicy`
  - Descriptor tags: `light`, `deep`, `fun`, `romantic`, etc.

To add new cards, simply add new objects to the JSON array.

---

## 🎨 Customization

### Categories

Edit `/lib/categories.ts` to customize categories:

```typescript
export const categories: CategoryInfo[] = [
  {
    id: "frens",
    name: "FRENS",
    gradient: {
      from: "#FF9A9E",
      to: "#FAD0C4"
    },
    description: "Fun and meaningful conversations for friends"
  },
  // ... more categories
];
```

### Styling

- Global styles: `/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Gradient colors defined in category configuration

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Deploy!

### Environment Variables

No environment variables required for basic functionality.

---

## 📱 Progressive Web App (PWA)

Chattr includes PWA support:

- Install on home screen (iOS/Android)
- Offline-ready after first load
- Full-screen experience
- Native app feel

---

## 🎯 Usage Tips

1. **Place your phone face-up** on a table for shared viewing
2. **Select a category** that fits your group's mood
3. **Read the question aloud** and let the conversation flow
4. **Use the timer** to keep discussions balanced
5. **Swipe or tap** when ready for the next question
6. **Skip** any question that doesn't resonate

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Ideas for Contribution

- Add more curated questions
- Create new categories
- Improve animations
- Add translations
- Enhance accessibility

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

Built with love for meaningful human connections.

Inspired by the belief that good conversations can change everything.

---

## 📞 Support

For questions or feedback, please open an issue on GitHub.

---

**yapy.app** - convos that hit 💬


