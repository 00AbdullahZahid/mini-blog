import "./globals.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import { FiList } from "react-icons/fi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-900 text-white p-4 flex items-center justify-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <FaHome/> Home
          </Link>
          <Link href="/blogs" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <ImBlogger /> Blogs
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <AiOutlineInfoCircle /> About Us
          </Link>
          <Link href="/contact" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <MdOutlineContactSupport /> Contact Us
          </Link>
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <FiList /> Dashboard
          </Link>
        </header>
        {children}
        <footer className="bg-blue-900 text-white p-4 text-center p-4">
          © 2026 My Blog
        </footer>
      </body>
    </html>
  );
}