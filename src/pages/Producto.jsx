import { Link } from 'react-router-dom'
import {
  BookIcon,
  CheckIcon,
  ClipboardIcon,
  IdeaIcon,
  RocketIcon,
  TargetIcon
} from '../components/ui/Icons'

const Producto = () => {
  return (
    <div className="bg-deep-black min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          <span className="inline-flex items-center gap-3 justify-center">
            <RocketIcon size={34} className="text-electric" /> Producto
          </span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          SuscriPago: una solución real para un problema real
        </p>

        <div className="space-y-8">
          {/* Introducción */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 inline-flex items-center gap-2">
              <IdeaIcon size={20} className="text-electric" /> La Propuesta de Valor
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SuscriPago es una propuesta de emprendimiento digital enfocada en ayudar a las personas a organizar, 
              monitorear y optimizar sus suscripciones recurrentes. En un contexto donde cada mes se pagan múltiples 
              servicios (streaming, educación, software, apps), muchas personas pierden control sobre sus gastos por 
              cobros automáticos, fechas de renovación y pagos invisibles.
            </p>
            <p className="text-gray-300 leading-relaxed">
              La propuesta de valor de SuscriPago es simple pero poderosa: <strong className="text-white">convertir el desorden financiero 
              en decisiones inteligentes</strong>. A través de una experiencia práctica y centrada en el usuario, el proyecto 
              busca mejorar hábitos de planificación económica, prevenir sobrecostos y fortalecer la cultura de consumo 
              consciente.
            </p>
          </div>

          {/* ¿Qué incluye? */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 inline-flex items-center gap-2">
              <ClipboardIcon size={20} className="text-electric" /> ¿Qué incluye el producto?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Como parte de la práctica profesional, el producto no se presenta solo como idea tecnológica, 
              sino como emprendimiento con estructura. Por eso se integra con:
            </p>
            <ul className="bg-deep-black/50 p-5 rounded-xl border border-midnight space-y-2">
              <li className="text-gray-300 flex items-start gap-3">
                <CheckIcon size={18} className="mt-1 text-electric" />
                <span><strong className="text-white">Formalización documental</strong> del proyecto.</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <CheckIcon size={18} className="mt-1 text-electric" />
                <span><strong className="text-white">Plan de formación estratégico</strong> para fortalecer competencias del equipo.</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <CheckIcon size={18} className="mt-1 text-electric" />
                <span><strong className="text-white">Argumentación de pertinencia</strong> del producto frente al problema abordado.</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <CheckIcon size={18} className="mt-1 text-electric" />
                <span><strong className="text-white">Soporte conceptual</strong> basado en autores y fuentes confiables.</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <CheckIcon size={18} className="mt-1 text-electric" />
                <span><strong className="text-white">Enfoque de sostenibilidad</strong> para proyectar continuidad en el tiempo.</span>
              </li>
            </ul>
          </div>

          {/* Pertinencia */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 inline-flex items-center gap-2">
              <TargetIcon size={20} className="text-electric" /> Pertinencia del Producto
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">¿Por qué sí responde al problema?</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              SuscriPago es pertinente porque responde a una necesidad actual del mercado digital: 
              administrar pagos recurrentes de manera clara y preventiva. Además, conecta el perfil 
              profesional del estudiante con soluciones innovadoras, aplicables y evaluables dentro del 
              escenario de práctica. No es una propuesta abstracta; es una respuesta concreta con 
              fundamento técnico, administrativo y formativo.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-midnight to-deep-black border border-electric/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4 inline-flex items-center gap-2 justify-center">
              <BookIcon size={20} /> Explora el Blog
            </h3>
            <p className="text-gray-300 mb-6">
              Conoce cómo la formalización y el plan de formación respaldan esta propuesta
            </p>
            <Link 
              to="/blog" 
              className="inline-block bg-electric hover:bg-electric/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-electric/25"
            >
              Ver Artículos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Producto
