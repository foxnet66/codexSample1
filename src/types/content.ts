export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export interface Post extends PostFrontMatter {
  slug: string;
  content: string;
}

export type PostSummary = Pick<Post, 'slug' | 'title' | 'date' | 'excerpt' | 'author'>;

