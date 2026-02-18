export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">

      {/* Hero Section */}
      <section className="py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Rani Sharma
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full Stack Developer | Next.js | Node.js | Scalable Web Systems
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-md font-semibold">
            View Projects
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" className="border border-white px-6 py-3 rounded-md">
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7 max-w-3xl">
          I am a B.Tech student at NIT Jamshedpur (CGPA: 8.08) with strong
          foundations in Data Structures, Operating Systems, DBMS, and Networks.
          I build end-to-end web applications — from responsive frontend interfaces
          to secure backend APIs and optimized database architecture.
          I have developed production-grade systems used in live college events
          with authentication, analytics, and role-based workflows.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-400">

          <div>
            <h3 className="text-white font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>Next.js (App Router)</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI</li>
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
      <section id="projects" className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="space-y-12">

          {/* SPIE */}
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              SPIE & PRODYOG – Event Management Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Built a production-ready full stack platform for event registration,
              team management, and leaderboard operations. Implemented Google OAuth
              with JWT session handling, role-based admin access, relational schema
              constraints, and analytics dashboard with CSV export.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech: Next.js, Prisma, PostgreSQL, JWT, Google OAuth
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/YOUR_GITHUB_LINK" target="_blank" className="underline">
                GitHub
              </a>
              <a href="#" className="underline">
                Live Demo
              </a>
            </div>
          </div>

          {/* INKNEST */}
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              INKNEST – Printing Services Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Developed modular REST APIs for authentication, order processing,
              and file uploads. Integrated Cloudinary for media storage and
              implemented secure JWT authentication with rate limiting.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech: Node.js, Express, MongoDB, Cloudinary
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/YOUR_GITHUB_LINK" target="_blank" className="underline">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-4">
          Email: rani2003333@gmail.com
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="underline">
            LinkedIn
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" className="underline">
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}
