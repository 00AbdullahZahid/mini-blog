import "./globals.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ImBlogger } from "react-icons/im";

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
          <Link href="http://localhost:3000/blogs" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold">
            <ImBlogger /> Blogs
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