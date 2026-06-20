import { Link } from 'react-router-dom'
import Hero from '../components/ui/Hero'
import { BookIcon } from '../components/ui/Icons'

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Introducción al Blog */}
      <section className="py-16 bg-midnight/20 border-y border-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="inline-flex items-center gap-3 justify-center">
              <BookIcon size={24} className="text-electric" /> Sobre este Blog
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Este blog reúne la <strong className="text-white">formalización documental</strong> y el 
            <strong className="text-white"> plan de formación</strong> de SuscriPago como base para demostrar 
            que una idea de emprendimiento puede convertirse en una propuesta sólida, pertinente y sostenible. 
            Aquí encontrarás cómo se estructura el producto, por qué su enfoque es viable y qué elementos 
            académicos y estratégicos lo respaldan para responder al reto de la práctica profesional.
          </p>
          <Link 
            to="/blog" 
            className="inline-block mt-6 text-electric hover:text-electric/80 font-medium"
          >
            Explorar el Blog →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
