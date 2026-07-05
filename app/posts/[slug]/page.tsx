import { Post } from "../../types";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const res = await fetch("https://jsonfakery.com/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-8 text-center">Failed to fetch post.</div>;
  }

  const allPosts: Post[] = await res.json();
  const posts = allPosts.slice(0, 9);
  const post = posts.find(
    (p) => p.id === slug
  );

  if (!post) {
    return (
      <div className="p-8 text-center">
        Post not found.
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <img src={post.featured_image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-gray-400 mb-4">
        {post.created_at}
      </p>
      <p className="text-xl mb-6">
        {post.summary}
      </p>
      <div className="text-lg leading-8 mt-6">
        {post.content}
      </div>
    </main>
  );
}