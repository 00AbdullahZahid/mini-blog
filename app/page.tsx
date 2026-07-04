import Link from "next/link";
import { Post } from "./types";
import { FaBook } from "react-icons/fa";

export default async function Home() {

  const res = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await res.json();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>
      <div>

      </div>
    </main>
  );
}
