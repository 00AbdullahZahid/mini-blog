import type { Post } from '../types';
import { localPosts } from './posts-data';

export const dynamic = 'force-dynamic';

export async function getPosts(): Promise<Post[]> {
  return localPosts;
}
