import { Link } from 'react-router-dom'
import { EmailIcon, PhoneIcon, UserIcon } from '../ui/Icons'

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-midnight text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo - CORRECTO: usa logo-oro.png */}
              <img 
                src="/assets/images/logo-oro.png" 
                alt="SuscriPago" 
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-lg">SuscriPago</span>
            </div>
            <p className="text-sm leading-relaxed">
              Optimización inteligente de suscripciones digitales para emprendedores y empresas.
            </p>
            <p className="text-xs text-gray-600 mt-3">
              Leonardo Mosquera Rodríguez<br />
              Ingeniería de Software - Uniminuto
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/caracteristicas" className="hover:text-white transition-colors">Características</Link></li>
              <li><Link to="/precios" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link to="/seguridad" className="hover:text-white transition-colors">Seguridad</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Blog</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog?category=Formalización" className="hover:text-white transition-colors">Formalización</Link></li>
              <li><Link to="/blog?category=Planificación" className="hover:text-white transition-colors">Planificación</Link></li>
              <li><Link to="/blog?category=Emprendimiento" className="hover:text-white transition-colors">Emprendimiento</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <UserIcon size={18} className="text-electric" /> Leonardo Mosquera
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon size={18} className="text-electric" /> leomoslab@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon size={18} className="text-electric" /> 3103953475
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-midnight mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 SuscriPago - Leonardo Mosquera Rodríguez</p>
          <p className="text-xs mt-1">Ingeniería de Software - Corporación Universitaria Minuto de Dios</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
