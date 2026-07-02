export const projects = [
  {
    id: "ecolife",
    name: "EcoLife",
    subtitle: "Gamified Carbon Footprint Tracker",
    stack: ["Flutter", "Firebase"],
    date: "Jan 2026",
    images: [
      "/images/ecolife.mp4",
    ],
    badge: "🥇 TechRush 1st Place",
    description: `Sustainability apps usually guilt-trip you into caring. EcoLife does 
    the opposite — it turns everyday eco actions into a game students actually want to play.
No carbon math. No "how many litres of water did you use today" 
nonsense nobody can answer. Just log a real action — cycling 
to class, taking the bus, skipping a plastic bottle — and EcoLife handles the rest: instant EcoScore updates, streaks, campus leaderboards, and unlockable rewards.
What it does
• One-tap logging, zero friction
• Real-time EcoScore that updates the moment you log an action
• Campus-based leaderboards for a bit of healthy competition
• Multi-day challenges that build habits instead of one-off actions
• Rewards tied to real campus perks

Under the hood
One action triggers a Firestore update → EcoScore recalculates → Provider pushes it to the UI instantly → leaderboard syncs off the same source of truth. One action, one source of truth, instant feedback everywhere.
Stack: Flutter · Firebase Authentication · Cloud Firestore · Provider`,
    github: "https://github.com/Sanidhya-06/gdg-hacakthon.git",
    color: "#D4EDD4",
  },
  {
    id: "sign-to-speech",
    name: "Sign-to-Speech Translator",
    subtitle: "Still under development",
    stack: ["Python", "TensorFlow", "MediaPipe", "DeepFace"],
    date: "May 2026",
    images: [""],
    badge: null,
    description: `Most sign language tools translate the words and stop there. This 
    one goes further — it tries to catch the feeling behind them too. A frustrated "Help!" and a polite "Help?" sign identically, but they 
    don't mean the same thing. This project doesn't let that nuance 
    get lost in translation.
It's a real-time pipeline that reads hand signs and facial expressions together, then speaks the result with a voice that actually reflects the emotion behind it — happy signs sound warm, distressed ones sound weighted. And it all runs 100% locally, no internet, no data leaving the machine.
What it does
• Recognizes 7 core ASL signs — Hello, Thank You, Help, Yes, No, Please, Sorry
• Detects 5 emotions from facial expression — Happy, Sad, Angry, Fear, Neutral
• Modulates speech rate and pitch per emotion, so tone carries through, not just text
• Live hand skeleton + full face mesh overlay for visual feedback
• Fully offline, fully local — privacy by default

Under the hood
Webcam frames flow through MediaPipe for hand (21-point) and face (478-point) landmark extraction, which feed two parallel branches: an LSTM classifier for sign recognition and DeepFace for emotion detection. Both outputs merge in a fusion layer that drives pyttsx3's offline TTS engine, rendered live through an OpenCV HUD.
Stack: Python 3.11 · TensorFlow (LSTM) · MediaPipe · DeepFace · OpenCV · pyttsx3`,
    github: "https://github.com/Sanidhya-06/Sign-language-Detector.git",
    color: "#D4D4ED",
  },
  {
    id: "museum",
    name: "Museum of Useless Details",
    subtitle: "Interactive Front-End Experiment",
    stack: ["HTML", "CSS", "JavaScript"],
    date: "Nov 2025",
    images: ["/images/museum-of-useless-details.mp4"],
    badge: null,
    description: `It's a snarky little archive of space facts, the kind of trivia nobody asked for but everyone secretly wants to know. No dry Wikipedia 
    tone here; every fact comes with a wink, like the universe is 
    judging you a little for not knowing it already.
    What it does
• An animated orbiting solar system as the hero, planets drifting on their own paths, because static hero sections are boring
• A dark, moody palette with a bold yellow display font that feels 
more "museum exhibit" than "space app"
• Facts framed as tiny exhibits you browse through, not a boring scrollable list
Under the hood
Built entirely in React + Vite, with custom orbital animations driving the planets around the sun in real time — no canvas libraries, just CSS/JS doing the orbital math.
Stack: React · Vite`,
    github: "https://github.com/Sanidhya-06/museum-of-useless-details.git",
    color: "#EDD4D4",
  },
]
