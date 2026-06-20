import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon, MenuIcon } from '../ui/Icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/90 backdrop-blur-md border-b border-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/images/logo-oro.png" 
              alt="SuscriPago" 
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Suscri<span className="text-electric">Pago</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Inicio
            </Link>
            <Link to="/producto" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Producto
            </Link>
            <Link to="/caracteristicas" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Características
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Blog
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Acerca de
            </Link>
            <Link 
              to="/subscribe" 
              className="bg-electric text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-electric/80 transition-colors shadow-lg shadow-electric/20"
            >
              Suscribirse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-deep-black/95 border-b border-midnight">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-midnight rounded-lg transition-colors">
              Inicio
            </Link>
            <Link to="/producto" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-midnight rounded-lg transition-colors">
              Producto
            </Link>
            <Link to="/caracteristicas" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-midnight rounded-lg transition-colors">
              Características
            </Link>
            <Link to="/blog" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-midnight rounded-lg transition-colors">
              Blog
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-midnight rounded-lg transition-colors">
              Acerca de
            </Link>
            <Link 
              to="/subscribe" 
              className="block px-4 py-2 bg-electric text-white text-center rounded-lg font-semibold hover:bg-electric/80 transition-colors"
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
