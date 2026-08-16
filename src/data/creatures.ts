export interface Creature {
  src: string;
  alt: string;
}

// Work-in-progress creature animations, mostly from an unreleased mod. 12 entries — 3 rows of 4.
export const creatureGifs: Creature[] = [
  { src: '/media/creatures/baby-dragon-flap.gif', alt: 'Baby dragon flapping its wings' },
  { src: '/media/creatures/alien-idle.gif', alt: 'Alien creature idling' },
  { src: '/media/creatures/alien-walk.gif', alt: 'Alien creature walking' },
  { src: '/media/creatures/dragonfly-flying.gif', alt: 'Giant dragonfly flying' },
  { src: '/media/creatures/dragonfly-idle.gif', alt: 'Giant dragonfly idling' },
  { src: '/media/creatures/dragonfly-walk.gif', alt: 'Giant dragonfly walking' },
  { src: '/media/creatures/sailfish-idle.gif', alt: 'Sailfish idling in water' },
  { src: '/media/creatures/sailfish-slice.gif', alt: 'Sailfish slicing through water' },
  { src: '/media/creatures/sailfish-swim.gif', alt: 'Sailfish swimming' },
  { src: '/media/creatures/sandfish-leap.gif', alt: 'Sandfish leaping' },
  { src: '/media/creatures/sandfish-swim.gif', alt: 'Sandfish swimming' },
  { src: '/media/creatures/true-nuker-walk.gif', alt: 'True Nuker creature walking' },
];

// Still renders and screenshots — shown in a carousel, separate from the animated grid above.
export const creatureStills: Creature[] = [
  { src: '/media/creatures/sailfish-render.webp', alt: 'Sailfish 3D model render' },
  { src: '/media/creatures/deer-sit.webp', alt: 'Deer sitting' },
  { src: '/media/creatures/deer-walk.webp', alt: 'Deer walking' },
  { src: '/media/creatures/fathead-fish.webp', alt: 'Fathead fish swimming in a pond' },
  { src: '/media/creatures/argentavis.webp', alt: 'Giant Argentavis flying' },
  { src: '/media/creatures/ptarmigan.webp', alt: 'Ptarmigan' },
  { src: '/media/creatures/robotfish-gunther.webp', alt: 'Robotfish Gunther' },
  { src: '/media/creatures/sleeping-shroombears.webp', alt: 'Sleeping shroombears' },
];
