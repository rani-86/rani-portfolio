import { notFound } from "next/navigation";
import Link from "next/link";

// --- Project Data ---
const projects = {
  spie: {
    title: "SPIE & PRODYOG",
    subtitle: "Event Management Platform",
    description: `
      A production-grade full stack web platform built for official college society and annual fest operations.
      
      This system handles thousands of requests during fest season, ensuring seamless registration and real-time updates for participants.
      
      Key Features:
      - Google OAuth authentication for secure and one-click login.
      - JWT session handling for stateless, scalable user sessions.
      - Role-based admin access (Admin vs User vs Team Lead).
      - Relational database constraints ensuring data integrity.
      - Automated CSV export functionality for non-technical team members.
    `,
    tech: "Next.js • Prisma • PostgreSQL • JWT • Google OAuth • Tailwind",
  },
  inknest: {
    title: "INKNEST",
    subtitle: "Printing Services Platform",
    description: `
      A modular full stack order management system built with Express and MongoDB to streamline campus printing services.
      
      Key Features:
      - Secure JWT authentication with refresh token rotation.
      - Cloudinary integration for handling large design file uploads.
      - Rate limiting & request validation to prevent abuse.
      - Optimized database indexing for fast query performance on order history.
    `,
    tech: "Node.js • Express • MongoDB • Cloudinary • JWT",
  },
  accessibility: {
    title: "Accessibility Analyzer",
    subtitle: "Web Audit System",
    description: `
      A backend-heavy system that analyzes webpages using the Lighthouse API to generate accessibility compliance reports.
      
      Key Features:
      - Asynchronous processing using message queues to handle long-running audit tasks.
      - Structured accessibility reporting with actionable insights.
      - Scalable request handling capable of concurrent audits.
      - Fault-tolerant pipelines that retry failed jobs automatically.
    `,
    tech: "Node.js • Express • Lighthouse API • Async Processing",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug as keyof typeof projects];

  if (!project) return notFound();

  // Helper to split the tech string into an array for the "pills"
  const techStack = project.tech.split("•").map((t) => t.trim());

  return (
    <main className="bg-black text-white min-h-screen flex justify-center py-24 px-6 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>

      <div className="max-w-3xl w-full">
        
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-blue-400 transition mb-8 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <h2 className="text-xl text-blue-400 font-medium">
            {project.subtitle}
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-zinc-900/50 border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-8 whitespace-pre-line text-lg">
              {project.description}
            </p>
          </div>

        </div>
        
        {/* Footer / CTA */}
        <div className="mt-12 flex justify-between items-center border-t border-gray-800 pt-8">
            <p className="text-gray-500">
                Interested in the code?
            </p>
            <a 
                href="https://github.com/rani-86" 
                target="_blank"
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
            >
                View on GitHub
            </a>
        </div>

      </div>
    </main>
  );
}