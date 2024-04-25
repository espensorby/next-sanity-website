import { PortableTextBlock } from 'sanity';

export type Page = {
  _id: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
