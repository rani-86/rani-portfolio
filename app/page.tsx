import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 border-b border-gray-800">
        <h1 className="font-semibold text-lg">Rani Sharma</h1>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
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

      {/* Hero Section */}
      <section className="py-24 border-t border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Rani Sharma
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl">
          Building production-grade full stack applications with secure authentication,
          scalable APIs, and optimized database architecture.
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

      {/* About */}
      <section className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 leading-7 max-w-3xl">
          I am a Full Stack Developer with hands-on experience designing and deploying
          real-world web applications. I build complete systems — from responsive frontend
          interfaces to secure backend APIs and relational database architecture.
          My work includes a production event management platform used in live operations,
          featuring authentication, analytics dashboards, and role-based workflows.
        </p>
      </section>

      {/* Skills */}
      <section className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-400">

          <div>
            <h3 className="text-white font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>Next.js (App Router)</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Backend</h3>
            <ul className="space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
              <li>Google OAuth</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Database & Tools</h3>
            <ul className="space-y-2">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Prisma ORM</li>
              <li>Docker</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <Link href="/projects/spie" className="bg-zinc-900 ... block">


            <h3 className="text-2xl font-semibold mb-4">
              SPIE & PRODYOG – Event Management Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Built a production-grade full stack platform for event registration,
              team management, and leaderboard operations. Implemented Google OAuth
              authentication with JWT session handling, role-based admin workflows,
              and relational database constraints ensuring data integrity.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Next.js • Prisma • PostgreSQL • JWT • Google OAuth • Tailwind
            </p>

            <div className="flex gap-4">
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
              >
                GitHub
              </a> */}
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/spie" className="bg-zinc-900 ... block">

            <h3 className="text-2xl font-semibold mb-4">
              INKNEST – Printing Services Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Designed modular REST APIs for authentication, order processing,
              secure file uploads, and optimized database queries using indexing.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Node.js • Express • MongoDB • Cloudinary • JWT
            </p>

            <div className="flex gap-4">
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
              >
                GitHub
              </a> */}
            </div>
          </Link>

          {/* Project 3 - Full Width */}
          <Link href="/projects/spie" className="bg-zinc-900 ... block">

            <h3 className="text-2xl font-semibold mb-4">
              Accessibility Analyzer – Web Audit System
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Developed an asynchronous backend system that analyzes webpages
              using Lighthouse API to generate structured accessibility reports.
              Designed scalable request handling and fault-tolerant processing
              pipelines to efficiently manage concurrent audits.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Node.js • Express • Lighthouse API • Async Processing
            </p>

            <div className="flex gap-4">
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
              >
                GitHub
              </a> */}
            </div>
          </Link>

        </div>
      </section>

      {/* What I Bring */}
      <section className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">What I Bring</h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-400 leading-7">

          <div>
            <ul className="space-y-4">
              <li>• 500+ DSA problems solved across platforms</li>
              <li>• Strong understanding of DBMS, OS & Computer Networks</li>
              <li>• Experience building live production systems</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li>• Clean modular backend architecture</li>
              <li>• Authentication & role-based access control systems</li>
              <li>• Leadership experience managing 60+ students</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <p className="text-gray-400 mb-4">
          Email: rani2003333@gmail.com
        </p>

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
