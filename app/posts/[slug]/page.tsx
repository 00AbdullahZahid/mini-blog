import { Post } from "../../types";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch("https://jsonfakery.com/blogs");
  const allPosts: Post[] = await res.json();
  const posts = allPosts.slice(0, 9);
  const post = posts.find(
    (p) => p.id === slug
  );
  console.log("Post",post); 

  if (!post) {
    return <div className="text-base p-8 text-center">Post not found.</div>;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <img
        src={post.featured_image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-2xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg">{post.summary}</p>
      <div>{post.content}</div>
    </main>
  );
}