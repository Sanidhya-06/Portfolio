// Central registry: maps folder ID → window config(s) to open
// Arrays mean multiple windows spawn simultaneously

export const WINDOW_CONFIGS = {
  about: [
    {
      id: "about",
      title: "About Me.txt",
      component: "About",
      x: 160,
      y: 60,
      width: 480,
      height: 380,
    },
    {
      id: "about-skills",
      title: "Skills.txt",
      component: "AboutSkills",
      x: 390,
      y: 220,
      width: 380,
      height: 300,
    },
    {
    id: "me-preview",
    title: "me3.jpg",
    component: "MePreview",
    x: 700,
    y: 100,
    width: 400,
    height: 360,
  },

  ],

  projects: [
    {
      id: "projects",
      title: "Projects",
      component: "Projects",
      x: 180,
      y: 80,
      width: 560,
      height: 380,
    },
    { 
      id: "projects-preview", 
      title: "preview.png", 
      component: "ProjectsPreview", 
      x: 760, 
      y: 100, 
      width: 280, 
      height: 240 
    },
  ],

  recents: [
    {
      id: "recents",
      title: "Recents",
      component: "Recents",
      x: 160,
      y: 70,
      width: 680,
      height: 400,
    },
    { 
      id: "recents-preview", 
      title: "preview.png", 
      component: "RecentsPreview", 
      x: 560, 
      y: 290, 
      width: 580, 
      height: 340 
    },

  ],

  resume: [
    {
      id: "resume",
      title: "Resume.pdf",
      component: "Resume",
      x: 300,
      y: 150,
      width: 320,
      height: 260,
    },
  ],

  trash: [
    {
      id: "trash",
      title: "Trash",
      component: "Trash",
      x: 200,
      y: 100,
      width: 360,
      height: 360,
    },
  ],

  welcome: {
    id: "welcome",
    title: "welcome.txt",
    component: "Welcome",
    x: typeof window !== "undefined" ? window.innerWidth / 2 - 210 : 300,
    y: typeof window !== "undefined" ? window.innerHeight / 2 - 150 : 160,
    width: 420,
    height: 300,
  },
}
