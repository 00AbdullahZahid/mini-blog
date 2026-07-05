export type Post = {
  id: string;

  title: string;

  subtitle: string;

  summary: string;

  content: string;

  featured_image: string;

  category: string;

  created_at: string;

  updated_at: string;

  tags: string[];

  comments: Comment[];

  Author: Author[]

  user: User;
};

export type Author = {
  id: number;
  name: string;
  email: string;
}

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
}

export type User = {
  id: string;
  first_name: string;
};