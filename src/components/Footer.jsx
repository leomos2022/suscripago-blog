import { Link } from 'react-router-dom'
import { EmailIcon, PhoneIcon, UserIcon } from './ui/Icons'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Suscripago</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Blog académico sobre formalización de documentos y plan de formación para emprendedores.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Leonardo Mosquera Rodríguez<br />
              Práctica Profesional NRC-9341
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Categorías</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog?category=Formalización" className="hover:text-white transition-colors">Formalización</Link></li>
              <li><Link to="/blog?category=Planificación" className="hover:text-white transition-colors">Planificación</Link></li>
              <li><Link to="/blog?category=Casos Prácticos" className="hover:text-white transition-colors">Casos Prácticos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Contacto</h4>
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
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Suscripago - Leonardo Mosquera Rodríguez</p>
          <p className="text-xs mt-1">Blog académico - Práctica Profesional NRC-9341</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
