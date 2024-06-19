import { Tag } from './Tags';

export interface Project {
  id: number;
  title: string;
  images: string[];
  summary: string;
  description: string;
  projectLink: string;
  tags: Tag[];
}
