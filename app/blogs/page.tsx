import Link from "next/link";
import { Post } from "../types";
import { FaBook } from "react-icons/fa";
import { notFound } from "next/navigation";

export default async function Blogs() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     if (!res.ok) {
    notFound();
  }
    const posts: Post[] = await res.json();
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">My Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 p-10 min-h-40">
                {posts.map((post) => (
                    <Link key={post.userId} href={`/posts/${post.userId}`}>
                        <div className=" min-h-40 flex flex-col justify-between border border-gray-300 rounded-lg p-4 hover:shadow-md transition">
                            <h2 className=" flex gap-1.5 items-center text-xl font-semibold"><FaBook /> {post.title}</h2>
                            <p className="text-gray-600">{post.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}