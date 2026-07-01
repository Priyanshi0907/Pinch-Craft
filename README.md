# PinchCraft 🖐️🧩

**Solve puzzles with nothing but your hands.**

PinchCraft is an interactive, gesture-controlled puzzle game built for the browser. Using real-time hand tracking, players pinch, drag, and manipulate puzzle pieces with natural hand movements — no mouse, no controller, just your webcam.

---

## ✨ Features

- **Real-time hand tracking** — Detects hand position and gestures (like pinch-to-grab) directly through your webcam, powered by MediaPipe.
- **Gesture-based interaction** — Pick up, move, and place puzzle pieces using natural pinch gestures instead of clicks or taps.
- **Procedurally generated puzzle images** — Puzzle artwork is generated procedurally rather than relying on static assets.
- **Live leaderboard** — Track and compare completion times against other players.
- **Audio feedback** — Synthesized sound effects respond to gameplay actions in real time.
- **Celebration effects** — Confetti animation on puzzle completion.
- **Smooth, animated UI** — Built with Framer Motion for fluid transitions and feedback.

---

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router) — React framework
- **[TypeScript](https://www.typescriptlang.org/)** — type-safe development
- **[MediaPipe](https://developers.google.com/mediapipe)** — real-time hand tracking and gesture recognition
- **[Framer Motion](https://www.framer.com/motion/)** — animations and transitions
- **[Zustand](https://github.com/pmndrs/zustand)** — game state management
- **[canvas-confetti](https://github.com/catdad/canvas-confetti)** — completion celebration effects
- **Web Audio API** — synthesized in-game sound effects

---

## 📁 Project Structure

```
PinchCraft/
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx          # Root layout
    │   │   ├── page.tsx            # Main game page
    │   │   └── globals.css
    │   ├── components/
    │   │   ├── GameContainer.tsx   # Core game logic and rendering
    │   │   ├── Leaderboard.tsx     # Score tracking and display
    │   │   └── Cursor.tsx          # Hand-tracked cursor visualization
    │   ├── hooks/
    │   │   └── useHandTracking.ts  # MediaPipe hand tracking hook
    │   ├── store/
    │   │   └── useGameStore.ts     # Zustand game state store
    │   └── utils/
    │       ├── proceduralImage.ts  # Procedural puzzle image generation
    │       └── synth.ts            # Audio synthesis utilities
    ├── public/                     # Static assets
    ├── package.json
    └── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- A webcam-enabled device and browser with camera permissions

### Installation

```bash
git clone https://github.com/Priyanshi0907/Pinch-Craft.git
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You'll be prompted to grant camera access — this is required for hand tracking to work.

### Build for production

```bash
npm run build
npm run start
```

---

## 🎮 How to Play

1. Allow camera access when prompted.
2. Position your hand within view of the webcam.
3. Pinch your thumb and index finger together to "grab" a puzzle piece.
4. Move your hand to drag the piece, then release the pinch to drop it in place.
5. Complete the puzzle as fast as you can to climb the leaderboard.

---

## 🧠 How It Works

PinchCraft uses MediaPipe's hand landmark detection model to track 21 key points on the user's hand in real time through the webcam feed. A custom `useHandTracking` hook processes these landmarks each frame to detect pinch gestures (based on the distance between thumb tip and index finger tip) and translates hand position into in-game cursor coordinates. Game state — including piece positions, completion status, and timing — is managed via Zustand for fast, predictable updates across the render loop.

---

## 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

---

## 👤 Author

**Priyanshi Choudhary**
GitHub: [@Priyanshi0907](https://github.com/Priyanshi0907)

---

Built with hands, webcams, and a lot of debugging. 🖐️