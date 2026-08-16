export interface SoftwareProject {
  title: string;
  description: string;
  media: string;
  // 'cover' crops to fill the frame (GIFs/screenshots); 'contain' shows the whole image, letterboxed (logos/icons).
  mediaFit?: 'cover' | 'contain';
  repoUrl: string;
  tags: string[];
}

export const softwareProjects: SoftwareProject[] = [
  {
    title: 'FlatfishConvert',
    description: 'Converts Seurat and SingleCellExperiment files to Python AnnData files.',
    media: '/media/software/flatfish-convert.png',
    mediaFit: 'contain',
    repoUrl: 'https://github.com/SQUADELDEE/Flatfish-Convert',
    tags: ['Python', 'R', 'Bioinformatics'],
  },
  {
    title: 'SARS-CoV-2 Data Analysis Pipeline',
    description:
      'Parses the Pango X dataset to glean more information about the evolution of the SARS-CoV-2 virus. Created in conjunction with the Huerta Sanchez lab.',
    media: '/media/software/sars-cov2-pipeline.png',
    mediaFit: 'contain',
    repoUrl: 'https://github.com/SQUADELDEE/SARS-COV2-Data_Parse_and_Analysis',
    tags: ['Python', 'Bioinformatics', 'Data Analysis'],
  },
];
