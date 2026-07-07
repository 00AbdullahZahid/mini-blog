import type { Post } from '../types';

export const dynamic = 'force-dynamic';

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

function normalizePosts(data: unknown): Post[] {
  if (!Array.isArray(data)) {
    return fallbackPosts;
  }

  return data.map((item) => {
    const post = item as Record<string, unknown>;
    const user = post.user as Record<string, unknown> | undefined;

    return {
      id: String(post.id ?? ''),
      title: String(post.title ?? 'Untitled post'),
      subtitle: String(post.subtitle ?? ''),
      summary: String(post.summary ?? ''),
      content: String(post.content ?? post.main_content ?? ''),
      featured_image: String(post.featured_image ?? ''),
      category: String(post.category ?? ''),
      created_at: String(post.created_at ?? ''),
      updated_at: String(post.updated_at ?? ''),
      tags: Array.isArray(post.tags) ? (post.tags as string[]) : [],
      comments: Array.isArray(post.comments) ? (post.comments as Post['comments']) : [],
      Author: user
        ? [{ id: Number(user.id ?? 0), name: String(user.first_name ?? ''), email: String(user.email ?? '') }]
        : [],
      user: user
        ? { id: String(user.id ?? ''), first_name: String(user.first_name ?? '') }
        : { id: '', first_name: '' },
    } as Post;
  });
}

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://jsonfakery.com/blogs', {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!res.ok) {
      return fallbackPosts;
    }

    const data = await res.json();
    return normalizePosts(data);
  } catch {
    return fallbackPosts;
  }
}
