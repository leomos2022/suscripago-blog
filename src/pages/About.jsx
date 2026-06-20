import { GraduationIcon, IdeaIcon, RocketIcon } from '../components/ui/Icons'

const About = () => {
  return (
    <div className="bg-deep-black min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="inline-flex items-center gap-3 justify-center">
              <RocketIcon size={34} className="text-electric" /> Sobre SuscriPago
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Optimización inteligente de suscripciones digitales
          </p>
        </div>

        <div className="bg-midnight/30 border border-midnight rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            SuscriPago nace como un proyecto de emprendimiento universitario en la 
            <span className="text-white"> Corporación Universitaria Minuto de Dios</span>, 
            desde la perspectiva de la <span className="text-electric">Ingeniería de Software</span>.
          </p>
          <p className="text-gray-400 leading-relaxed">
            La plataforma está diseñada para ayudar a emprendedores y empresas a gestionar 
            sus suscripciones digitales de manera inteligente, optimizando costos y mejorando 
            la eficiencia financiera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3 text-electric"><GraduationIcon size={30} /></div>
            <h3 className="text-white font-bold mb-2">Proyecto Universitario</h3>
            <p className="text-gray-400 text-sm">Ingeniería de Software - Uniminuto</p>
          </div>
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3 text-electric"><IdeaIcon size={30} /></div>
            <h3 className="text-white font-bold mb-2">Innovación FinTech</h3>
            <p className="text-gray-400 text-sm">Optimización de suscripciones recurrentes</p>
          </div>
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3 text-electric"><RocketIcon size={30} /></div>
            <h3 className="text-white font-bold mb-2">Alto Impacto</h3>
            <p className="text-gray-400 text-sm">Soluciones para emprendedores</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
