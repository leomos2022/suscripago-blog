import { Link } from 'react-router-dom'
import HeroBackground from './HeroBackground'
import { GraduationIcon, RocketIcon } from './Icons'

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-deep-black overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full mb-6 border border-electric/20">
            <span className="inline-flex items-center gap-2">
              <RocketIcon size={14} /> Plataforma FinTech
            </span>
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Gestiona tus <br />
            <span className="text-electric">Suscripciones</span> con 
            <span className="text-gold"> Inteligencia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Optimiza tus pagos recurrentes con una plataforma diseñada 
            para la eficiencia financiera. <span className="text-gray-300">Desde la ingeniería de software</span> 
            para emprendedores.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/dashboard" 
              className="bg-electric hover:bg-electric/80 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-electric/25 hover:shadow-electric/40"
            >
              Comenzar Ahora
            </Link>
            <Link 
              to="/blog" 
              className="border border-midnight hover:border-electric text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Ver Blog
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-electric rounded-full"></span>
              100+ Suscripciones Optimizadas
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              <GraduationIcon size={14} className="text-gold" /> Proyecto Universitario
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
