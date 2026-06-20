import { useState } from 'react'
import { GraduationIcon, SparkleIcon } from '../components/ui/Icons'

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-deep-black py-20 flex items-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-midnight/30 border border-midnight rounded-2xl p-8">
          {/* Logo protagónico */}
          <div className="flex justify-center mb-8">
            <img 
              src="/assets/images/logo-oro.png" 
              alt="SuscriPago" 
              className="h-20 w-auto"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Suscríbete a SuscriPago
          </h2>
          <p className="text-gray-300 text-center text-sm mb-6">
            Optimiza tus suscripciones con inteligencia financiera
          </p>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4 text-electric"><SparkleIcon size={48} /></div>
              <h3 className="text-white font-bold text-xl mb-2">¡Gracias por suscribirte!</h3>
              <p className="text-gray-300 text-sm">
                Pronto recibirás información sobre cómo optimizar tus suscripciones.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-electric hover:text-electric/80 text-sm font-medium"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black border border-midnight rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black border border-midnight rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Empresa o emprendimiento</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-deep-black border border-midnight rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-electric hover:bg-electric/80 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-electric/25"
              >
                Comenzar Prueba Gratuita
              </button>
              <p className="text-xs text-gray-500 text-center">
                <span className="inline-flex items-center gap-2 justify-center">
                  <SparkleIcon size={12} className="text-electric" /> Sin compromiso. Sin tarjeta de crédito requerida.
                </span>
              </p>
              <p className="text-xs text-gray-500 text-center border-t border-midnight pt-3">
                <span className="inline-flex items-center gap-2 justify-center">
                  <GraduationIcon size={12} className="text-electric" /> Proyecto de Práctica Profesional - NRC-9341
                </span>
                <br />
                Ingeniería de Software - Uniminuto
              </p>
            </form>
          )}
        </div>
        
        {/* Nodo decorativo */}
        <div className="flex justify-center mt-6">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 bg-electric rounded-full opacity-5 animate-pulse"></div>
            <div className="absolute inset-2 bg-royal rounded-full opacity-10"></div>
            <div className="absolute inset-4 bg-electric rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
