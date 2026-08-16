export interface GodotGame {
  title: string;
  description: string;
  // Full URL to the game's own GitHub Pages deployment (the index.html of the Godot HTML export).
  embedUrl: string;
  repoUrl?: string;
}

// Games from the Assembiota project, embedded from their own GitHub Pages builds, e.g.
// https://squadeldee.github.io/my-godot-game/
export const assembiotaGames: GodotGame[] = [
  {
    title: 'Cell Game',
    description: 'Drag the organelles to the tray to learn more about them. Add or remove organelles to your liking!',
    embedUrl: 'https://squadeldee.github.io/CellGame/',
    repoUrl: 'https://github.com/SQUADELDEE/CellGame',
  },
  {
    title: 'Assembiota Ecosystem',
    description:
      'Watch creatures grow, population balance, and introduce factors like predators. Zoom in to see things in detail. Temperature is in-dev for now.',
    embedUrl: 'https://squadeldee.github.io/DemoAssembiota/',
    repoUrl: 'https://github.com/SQUADELDEE/DemoAssembiota',
  },
];

export interface GameRecording {
  title: string;
  description: string;
  videoSrc: string;
  // width/height, e.g. "600/1080" for portrait or "960/590" for landscape.
  aspectRatio: string;
  frame: 'phone' | 'plain';
  repoUrl?: string;
}

// Games too large/complex to embed live — shown as looping muted recordings instead.
export const gameRecordings: GameRecording[] = [
  {
    title: 'Flying Fish',
    description:
      'Game built to display parallax, lighting and layering capabilities. Enemy spawning is handled with an array and dictionary wave system.',
    videoSrc: '/media/games/flying-fish-demo.mp4',
    aspectRatio: '600/1080',
    frame: 'phone',
  },
  {
    title: 'Djon Djon',
    description:
      'Work in progress desktop game and one of the first to support window passthrough for both Windows and Mac simultaneously. Uses unique passthrough logic that combines GDScript and C# to allow users to work with the window below while the game stays on top.',
    videoSrc: '/media/games/djon-djon-demo.mp4',
    aspectRatio: '960/590',
    frame: 'plain',
  },
];
