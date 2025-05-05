import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1f2833] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-[#45a29e] font-bold text-xl">Sikandar Patel</div>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="/" className="hover:text-[#45a29e] transition">
              Home
            </a>
            <a href="/aboutme" className="hover:text-[#45a29e] transition">
              About Me
            </a>
            <a href="/project" className="hover:text-[#45a29e] transition">
              Projects
            </a>
            <a href="/skills" className="hover:text-[#45a29e] transition">
              Skills
            </a>
            <a href="/contactme" className="hover:text-[#45a29e] transition">
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#45a29e] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 text-sm font-medium px-2 pb-4">
            <a
              href="/"
              className="block text-[#45a29e] hover:text-white transition"
            >
              Home
            </a>
            <a
              href="/aboutme"
              className="block text-[#45a29e] hover:text-white transition"
            >
              About Me
            </a>
            <a
              href="/project"
              className="block text-[#45a29e] hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="/skills"
              className="block text-[#45a29e] hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="/contactme"
              className="block text-[#45a29e] hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
