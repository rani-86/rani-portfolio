export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">

      {/* Hero Section */}
      <section className="py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Rani Sharma
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl">
          Building production-grade full stack applications with secure authentication,
          scalable APIs, and optimized database architecture.
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
          I am a Full Stack Developer with hands-on experience designing and deploying
          real-world web applications. I build complete systems — from responsive frontend
          interfaces to secure backend APIs and relational database architecture.
          My work includes a production event management platform used in live operations,
          featuring authentication, analytics dashboards, and role-based workflows.
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
      <section id="projects" className="py-24 border-t border-gray-800">
  <h2 className="text-3xl font-bold mb-16">Featured Projects</h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Project 1 */}
    <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition">
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
        <a
          href="https://github.com/rani-86/rani-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href="#"
          className="px-5 py-2 bg-white text-black rounded-md hover:opacity-80 transition"
        >
          Live
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition">
      <h3 className="text-2xl font-semibold mb-4">
        INKNEST – Printing Services Platform
      </h3>

      <p className="text-gray-400 mb-6 leading-7">
        Designed modular REST APIs for authentication, order processing,
        and secure file uploads. Integrated Cloudinary for media storage and
        implemented request validation, rate limiting, and optimized database queries.
      </p>

      <p className="text-sm text-gray-500 mb-6">
        Node.js • Express • MongoDB • Cloudinary • JWT
      </p>

      <div className="flex gap-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
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
