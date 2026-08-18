export interface MinecraftMod {
  title: string;
  description: string;
  cover?: string;
  // 'cover' crops to fill the frame (banner art); 'contain' shows the whole image, letterboxed (logos/icons).
  coverFit?: 'cover' | 'contain';
  curseforgeUrl: string;
}

export const mods: MinecraftMod[] = [
  {
    title: "Squadeldee's Bygone Creatures",
    description:
      'Adds extinct creatures from across history, along with armor, tools, and weapons crafted from their parts, to give your world a bit of prehistoric spice.',
    cover: '/media/mods/bygone-creatures-cover.webp',
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/squadeldees-bygone-creatures',
  },
  {
    title: 'Made in Abyss: Shroombears',
    description: 'Brings the shroombears from Made in Abyss into Minecraft, adding some unique flavor to the dark forest biome.',
    cover: '/media/mods/shroombears-cover.webp',
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/made-in-abyss-shroombears',
  },
  {
    title: 'Leaping Salmon',
    description:
      'A simple, lightweight mod that makes salmon jump from time to time, adding a bit of ambience to make the mobs feel more alive.',
    cover: '/media/mods/leaping-salmon-cover.png',
    coverFit: 'contain',
    curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/leaping-salmon',
  },
];
