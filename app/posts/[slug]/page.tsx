import { Post } from "../../types";

export default async function PostPage({
  params, }: { params: Promise<{ userId: number }>; }) {

  const { userId } = await params;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const post = posts.find((p) => p.userId === userId);

  if (!post) {
    return <div className="p-8">Post not found.</div>;
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed text-center">{post.body}</p>
    </main>
  );
}