import { notFound } from "next/navigation";

const projects = {
  spie: {
    title: "SPIE & PRODYOG – Event Management Platform",
    description: `
      A production-grade full stack web platform built for official college society
      and annual fest operations. Includes event registration, team management,
      leaderboard operations, and admin analytics dashboard.

      Key Features:
      - Google OAuth authentication
      - JWT session handling
      - Role-based admin access
      - Relational database constraints
      - CSV export functionality
      - Production deployment
    `,
    tech: "Next.js • Prisma • PostgreSQL • JWT • Google OAuth • Tailwind"
  },
  inknest: {
    title: "INKNEST – Printing Services Platform",
    description: `
      A modular full stack order management system built with Express and MongoDB.

      Key Features:
      - JWT authentication
      - Secure file uploads
      - Cloudinary integration
      - Rate limiting & request validation
      - Optimized database indexing
    `,
    tech: "Node.js • Express • MongoDB • Cloudinary • JWT"
  },
  accessibility: {
    title: "Accessibility Analyzer – Web Audit System",
    description: `
      Backend system that analyzes webpages using Lighthouse API.

      Key Features:
      - Asynchronous processing
      - Structured accessibility reporting
      - Scalable request handling
      - Fault-tolerant pipelines
    `,
    tech: "Node.js • Express • Lighthouse API • Async Processing"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) return notFound();

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-24">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="text-gray-400 leading-7 mb-8 whitespace-pre-line">
        {project.description}
      </p>

      <p className="text-sm text-gray-500">
        {project.tech}
      </p>
    </main>
  );
}
