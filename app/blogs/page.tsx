import Link from "next/link";
import { Post } from "../types";
import { FaBook } from "react-icons/fa";

export default async function Blogs() {

    const res = await fetch("http://localhost:3000/api/posts");
    const posts: Post[] = await res.json();
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">My Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 p-10 min-h-40">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                        <div className="p-6 min-h-40 flex flex-col justify-between border border-gray-300 rounded-lg p-4 hover:shadow-md transition">
                            <h2 className=" flex gap-1.5 items-center text-xl font-semibold"><FaBook /> {post.title}</h2>
                            <p className="text-gray-600">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}