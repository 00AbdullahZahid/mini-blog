import { NextResponse } from "next/server";

const posts = [
  { slug: "hello-world", title: "Hello World", excerpt: "My first post!", content: "This is my very first post. Excited to be here!" },
  { slug: "learning-nextjs", title: "Learning Next.js", excerpt: "Notes on my journey.", content: "Next.js adds routing, server components, and more on top of React." },
  { slug: "flexbox-tips", title: "Flexbox Tips", excerpt: "Things I wish I knew earlier.", content: "Use flex-direction to control layout, and gap for spacing between items." },
  { slug: "array-tips", title: "Array Tips", excerpt: "These are some array tips", content: "I have compiled some tips for using arrays in you code."},
  { slug: "faster-writing", title: "Faster Writing", excerpt: "Here are som tips to write faster", content: "These are the things needed for faster typing speed."},
  { slug: "mobile-use", title: "Mobile Use", excerpt: "Uses of mobile phones", content: "These are the uses of the mobile phones in our daily day to day life"},
];


export async function GET() {
  return NextResponse.json(posts);
}