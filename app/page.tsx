import { Post } from "./types";

export default async function Home() {

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>
      <div>
        <p className="text-center">
          This ia a paragraph for the Home Page of the Mini Blog 
          This is a small blog I built while learning Next.js — covering things 
          like React fundamentals, routing, APIs, and everything in between. 
          It's a work in progress, just like my understanding of web development.
        </p>
      </div>
    </main>
  );
}
