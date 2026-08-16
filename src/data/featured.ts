export interface FeaturedProject {
  title: string;
  description: string;
  note?: string;
  videoSrc?: string;
  aspectRatio?: string;
  repoUrl?: string;
}

export const elahiDataVisualizer: FeaturedProject = {
  title: 'Elahi Data Visualizer',
  description:
    'Data preprocessing and visualizing application for the Elahi Lab at Mount Sinai. Created to help analyze RNAseq and Proteomics data connected to Dementia and various neurological conditions.',
  note: 'Currently unavailable for live testing given private access to Mt. Sinai, but a public demo is coming soon!',
  videoSrc: '/media/software/elahi-demo.mp4',
  aspectRatio: '960/624',
};
