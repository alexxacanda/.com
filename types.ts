export enum Category {
  PDF = 'PDF',
  Audio = 'Audio',
  Video = 'Video',
  Image = 'Image',
  Podcast = 'Podcast',
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  rating: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  format: Category;
  excerpt: string;
  thumbnail: string;
  previewUrl?: string; // For embedded players or PDF excerpts
  rating: number;
  reviews: number;
  comments?: Comment[];
}
