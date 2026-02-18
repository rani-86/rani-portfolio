import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Large 404 Text */}
      <h1 className="text-8xl font-bold mb-4 text-gray-800">404</h1>
      
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      
      <p className="text-gray-400 mb-8 text-center max-w-md leading-relaxed">
        The project or page you are looking for doesn't exist or has been moved.
      </p>
      
      {/* Return Home Button */}
      <Link 
        href="/"
        className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:opacity-80 transition"
      >
        Return Home
      </Link>
    </div>
  )
}