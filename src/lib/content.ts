import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { Post, PostFrontMatter, PostSummary } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content', 'posts');

const validateFrontMatter = (frontMatter: Partial<PostFrontMatter>): PostFrontMatter => {
  const requiredFields: (keyof PostFrontMatter)[] = ['title', 'date', 'excerpt', 'author'];

  requiredFields.forEach((field) => {
    if (typeof frontMatter[field] !== 'string' || frontMatter[field]!.trim().length === 0) {
      throw new Error(`Invalid front matter: missing field "${field}" in ${frontMatter.title ?? 'unknown post'}`);
    }
  });

  return frontMatter as PostFrontMatter;
};

const sortByDateDesc = (a: PostFrontMatter, b: PostFrontMatter) => {
  const first = new Date(a.date).getTime();
  const second = new Date(b.date).getTime();

  return second - first;
};

export const getPostSlugs = (): string[] => {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
};

export const getPostBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontMatter = validateFrontMatter(data as Partial<PostFrontMatter>);

  return {
    ...frontMatter,
    slug: realSlug,
    content,
  };
};

export const getAllPosts = (): PostSummary[] => {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort(sortByDateDesc)
    .map(({ content, ...summary }) => summary);
};
