export type Post = {
  id: string;
  user_id: string;

  title: string;
  subtitle: string;
  summary: string;
  content: string;

  featured_image: string;
  author: Author[];
  comment: Comment[];
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