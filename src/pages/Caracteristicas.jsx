import { Link } from 'react-router-dom'
import {
  ArticleIcon,
  BookIcon,
  CheckIcon,
  ClipboardIcon,
  LeafIcon,
  SparkleIcon,
  TargetIcon
} from '../components/ui/Icons'

const Caracteristicas = () => {
  return (
    <div className="bg-deep-black min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          <span className="inline-flex items-center gap-3 justify-center">
            <SparkleIcon size={34} className="text-electric" /> Características
          </span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Características clave del proyecto en el blog
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Característica 1 */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 hover:border-electric transition-colors">
            <div className="mb-4 text-electric"><ClipboardIcon size={34} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Enfoque en Formalización</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              El blog presenta los documentos necesarios para estructurar la propuesta de emprendimiento 
              con orden legal, administrativo y estratégico.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 hover:border-electric transition-colors">
            <div className="mb-4 text-electric"><BookIcon size={34} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Plan de Formación Aplicado</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Se explica por qué formar capacidades directivas, organizacionales y de sostenibilidad 
              es clave para que el proyecto crezca.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 hover:border-electric transition-colors">
            <div className="mb-4 text-electric"><ArticleIcon size={34} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Sustento Bibliográfico</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              El contenido se construye con base en Chiavenato (2022), Whetten y Cameron (2022), 
              Acuerdo 009 de 2018 y estudios sobre sostenibilidad empresarial.
            </p>
          </div>

          {/* Característica 4 */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 hover:border-electric transition-colors">
            <div className="mb-4 text-electric"><TargetIcon size={34} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Argumentación Profesional</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cada entrada justifica la relación entre problema, solución propuesta y perfil 
              profesional del estudiante.
            </p>
          </div>

          {/* Característica 5 */}
          <div className="bg-midnight/30 border border-midnight rounded-xl p-6 hover:border-electric transition-colors md:col-span-2">
            <div className="mb-4 text-electric"><LeafIcon size={34} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Visión Sostenible</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Se proyecta el emprendimiento no solo para "arrancar", sino para mantenerse y 
              evolucionar en el tiempo.
            </p>
          </div>
        </div>

        {/* Cómo cumple la actividad */}
        <div className="mt-8 bg-midnight/30 border border-midnight rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 inline-flex items-center gap-2">
            <CheckIcon size={20} className="text-green-400" /> Cómo estas características cumplen exactamente la actividad
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Responden a la pregunta sobre <strong className="text-white">documentos requeridos para formalización</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Responden a la pregunta sobre la <strong className="text-white">importancia del plan de formación</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Integran <strong className="text-white">descripción del producto o servicio</strong> de forma detallada.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Incluyen <strong className="text-white">plan estratégico/formativo</strong> como eje de desarrollo.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Incorporan <strong className="text-white">documento argumentativo de pertinencia y aval</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon size={18} className="mt-1 text-green-400" />
              <span>Facilitan una <strong className="text-white">presentación organizada, clara y lista para evaluación</strong> por rúbrica.</span>
            </li>
          </ul>
        </div>

        {/* Estilo recomendado */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-amber-400 mb-3 inline-flex items-center gap-2">
            <ClipboardIcon size={18} /> Estilo y estructura recomendada para el blog
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong className="text-white">Título corto, potente</strong> y conectado con emprendimiento/formalización.</li>
            <li>• <strong className="text-white">Mínimo tres entradas</strong>, con contenido sólido y bien desarrollado.</li>
            <li>• <strong className="text-white">Uso de multimedia útil</strong> (imágenes, video, infografías, audio corto).</li>
            <li>• <strong className="text-white">Redacción limpia</strong>: ortografía cuidada y lenguaje cercano.</li>
            <li>• <strong className="text-white">Cierre de cada entrada</strong> con una idea de impacto profesional y sostenible.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-midnight to-deep-black border border-electric/30 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4 inline-flex items-center gap-2 justify-center">
            <BookIcon size={20} /> Texto de introducción para navegación
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Este blog reúne la formalización documental y el plan de formación de SuscriPago como base 
            para demostrar que una idea de emprendimiento puede convertirse en una propuesta sólida, 
            pertinente y sostenible. Aquí encontrarás cómo se estructura el producto, por qué su enfoque 
            es viable y qué elementos académicos y estratégicos lo respaldan para responder al reto de 
            la práctica profesional.
          </p>
          <Link 
            to="/blog" 
            className="inline-block mt-6 bg-electric hover:bg-electric/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-electric/25"
          >
            Explorar el Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Caracteristicas
