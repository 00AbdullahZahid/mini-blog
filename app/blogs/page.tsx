import Link from "next/link";
import { Post } from "../types";
import { FaBook } from "react-icons/fa";

export default async function Blogs() {
    const res = await fetch("https://jsonfakery.com/blogs");
    const allPosts: Post[] = await res.json();
    const posts = allPosts.slice(0, 9);
    
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                My Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((posts: any) => (
                    <Link key={posts.id} href={`/posts/${posts.id}`}>
                        <div className="border rounded-lg p-4">
                            <img
                                src={posts.featured_image}
                                alt={posts.title}
                                className="w-full h-96 object-cover rounded-lg mb-6"
                            />
                            <h2 className="flex gap-2 items-center text-xl font-semibold">
                                <FaBook />
                                {posts.title}
                            </h2>
                            <p>{posts.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
