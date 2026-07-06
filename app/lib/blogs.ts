import type { Post } from '../types';

const fallbackPosts: Post[] = [
  {
    id: 'fallback-1',
    title: 'Build a blog with Next.js',
    subtitle: 'A quick introduction',
    summary: 'This fallback post is shown when the external API is unavailable.',
    content: 'The remote blog API could not be reached, so this sample content is shown instead.',
    featured_image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    category: 'Tutorial',
    created_at: '2026-07-01',
    updated_at: '2026-07-01',
    tags: ['Next.js', 'React'],
    comments: [],
    Author: [],
    user: { id: '1', first_name: 'Demo' },
  },
  {
    id: 'fallback-2',
    title: 'Working with forms in React',
    subtitle: 'A simple example',
    summary: 'Forms are easy to manage with controlled state and FormData.',
    content: 'This sample content demonstrates the UI path used in the contact form experience.',
    featured_image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    category: 'React',
    created_at: '2026-07-02',
    updated_at: '2026-07-02',
    tags: ['React', 'Forms'],
    comments: [],
    Author: [],
    user: { id: '2', first_name: 'Demo' },
  },
];

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://jsonfakery.com/blogs', {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return fallbackPosts;
    }

    const text = await res.text();

    if (!text) {
      return fallbackPosts;
    }

    const data = JSON.parse(text) as Post[];

    return Array.isArray(data) ? data : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}
