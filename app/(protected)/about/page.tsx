
import { sleep } from "../../lib/sleep";

export default async function About() {
  await sleep(400);

  return (
    <main className="p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">About Us</h1>
      <div className="mx-auto max-w-2xl p-6 shadow-sm">
        <p className="text-base text-white mb-3">
          Welcome to My Blog — a small corner of the internet built as a 
          hands-on learning project. This site was created to explore modern 
          web development practices using Next.js, React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-base text-white mb-3">
          The goal here isn't to be the next big publishing platform. It's a practice 
          ground for building real features you'd find on any production blog: dynamic 
          routing between posts, fetching and displaying data from an API, handling 
          contact form submissions, and putting together a clean, responsive design from 
          scratch.
        </p>
        <p className=" text-base text-white mb-3">
          Every post, page, and interaction on this site exists to test out a concept, 
          refine a skill, or debug a tricky edge case. If something looks a little 
          rough around the edges, that's part of the process — this is a site that grows 
          as its creator learns.
        </p>
        <p className=" text-base text-white mb-3">
          Thanks for stopping by. Feel free to poke around the blog posts, and don't 
          hesitate to reach out through the Contact Us page if you'd like to connect.
        </p>
      </div>
    </main>
  );
}