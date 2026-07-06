import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { getPosts } from "../lib/blogs";

export default async function Blogs() {
  const allPosts = await getPosts();
  const posts = allPosts.slice(0, 9);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <img src={post.featured_image} alt={post.title} className="w-full h-56 object-cover rounded-lg mb-4"/>
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <FaBook />
                {post.title}
              </h2>
              <p className="text-gray-500 mt-2">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}