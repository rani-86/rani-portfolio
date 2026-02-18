import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 border-b border-gray-800">
        <h1 className="font-semibold text-lg">Rani Sharma</h1>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a
            href="https://github.com/rani-86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Rani Sharma</h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl">
          Building production-grade full stack applications with secure
          authentication, scalable APIs, and optimized database architecture.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:opacity-80 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/rani-86"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <Link
            href="/projects/spie"
            className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition block"
          >
            <h3 className="text-2xl font-semibold mb-4">
              SPIE & PRODYOG – Event Management Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Production-grade full stack platform for event registration, team
              management, and leaderboard operations with secure authentication.
            </p>

            <p className="text-sm text-gray-500">
              Next.js • Prisma • PostgreSQL • JWT • Google OAuth
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/inknest"
            className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition block"
          >
            <h3 className="text-2xl font-semibold mb-4">
              INKNEST – Printing Services Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Modular REST API-based system for authentication, order
              processing, and secure media handling.
            </p>

            <p className="text-sm text-gray-500">
              Node.js • Express • MongoDB • Cloudinary • JWT
            </p>
          </Link>

          {/* Project 3 */}
          <Link
            href="/projects/accessibility"
            className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition md:col-span-2 block"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Accessibility Analyzer – Web Audit System
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Asynchronous backend system that analyzes webpages using Lighthouse
              API with scalable processing pipelines.
            </p>

            <p className="text-sm text-gray-500">
              Node.js • Express • Lighthouse API • Async Processing
            </p>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <p className="text-gray-400 mb-4">Email: rani2003333@gmail.com</p>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rani-86"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}