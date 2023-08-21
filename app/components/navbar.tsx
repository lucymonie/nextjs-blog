import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-10 inline-flex lg:text-left">
      <Link href="/" className="mr-10 text-xl">
        Home
      </Link>
      <Link href="/about" className="mr-10 text-xl">
        About
      </Link>
      <Link href="/blog" className="mr-10 text-xl">
        Blog
      </Link>
    </nav>
  );
}
