import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-semibold text-gray-800">
          </h1>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-blue-600 transition">
              sevice
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}