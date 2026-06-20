import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Suscripago</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="hidden sm:inline text-sm text-gray-500 font-medium">Blog Académico</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Acerca de
            </Link>
            <Link 
              to="/subscribe" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Suscribirse
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              to="/subscribe" 
              className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Suscribirse
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
