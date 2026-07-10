import Link from "next/link";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import { sleep } from "../lib/sleep";

export default async function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await sleep(700);

  return (
    <>
      <header className="flex items-center justify-center gap-6 bg-blue-900 p-4 text-white">
        <Link href="/blogs" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white">
          <ImBlogger /> Blogs
        </Link>
        <Link href="/about" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white">
          <AiOutlineInfoCircle /> About Us
        </Link>
        <Link href="/contact" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white">
          <MdOutlineContactSupport /> Contact Us
        </Link>
        <Link href="/login" className="rounded-lg border bg-gray-700 p-2 font-bold text-gray-300 hover:text-white">
          Login To Dashboard
        </Link>
      </header>
      {children}
      <footer className="bg-blue-900 p-4 text-center text-white">
        © 2026 My Blog
      </footer>
    </>
  );
}
