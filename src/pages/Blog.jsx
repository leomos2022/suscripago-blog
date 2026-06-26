import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BookIcon,
  ClipboardIcon,
  GraduationIcon,
  IdeaIcon,
  PenIcon,
  RocketIcon,
  SearchIcon,
  TargetIcon
} from '../components/ui/Icons'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = [
    { id: 'Todos', label: 'Todos', color: 'text-white', icon: BookIcon },
    { id: 'Formalización', label: 'Formalización', color: 'text-blue-300', icon: ClipboardIcon },
    { id: 'Planificación', label: 'Planificación', color: 'text-green-300', icon: TargetIcon },
    { id: 'Casos Prácticos', label: 'Casos Prácticos', color: 'text-purple-300', icon: RocketIcon },
    { id: 'Emprendimiento', label: 'Emprendimiento', color: 'text-amber-300', icon: IdeaIcon }
  ]
  
  const posts = [
    {
      id: 1,
      title: 'De la Idea al Papel: Documentos Clave para Formalizar tu Emprendimiento',
      excerpt: 'Descubre los documentos esenciales que necesitas para convertir tu idea de negocio en una empresa formal y sostenible. Basado en Chiavenato (2022) y Whetten & Cameron (2022).',
      date: '20 de junio, 2026',
      category: 'Formalización',
      readTime: '8 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'El Plan de Formación: El Mapa que Guía tu Éxito Empresarial',
      excerpt: 'Aprende por qué el plan de formación es fundamental para el crecimiento y la sostenibilidad de tu emprendimiento, basado en las teorías de Whetten & Cameron (2022).',
      date: '18 de junio, 2026',
      category: 'Planificación',
      readTime: '10 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'SuscriPago: Un Caso Práctico de Formalización y Sostenibilidad',
      excerpt: 'Conoce cómo la formalización de documentos y el plan de formación han sido clave para el desarrollo de SuscriPago, un emprendimiento digital creado desde la Ingeniería de Software.',
      date: '15 de junio, 2026',
      category: 'Casos Prácticos',
      readTime: '12 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'De Estudiante a Fundador: La Historia de SuscriPago',
      excerpt: 'El viaje académico y profesional que dio vida a SuscriPago, una startup FinTech creada desde la Ingeniería de Software en la Corporación Universitaria Minuto de Dios.',
      date: '12 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '15 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Arquitectura Financiera de SuscriPago: Innovación desde la Práctica Profesional',
      excerpt: 'Cómo diseñamos una plataforma segura para gestionar suscripciones recurrentes con microservicios, encriptación y validación server-side de IAP (NRC-9341).',
      date: '10 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '18 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Innovación Universitaria: El Semillero Emprendedor de SuscriPago',
      excerpt: 'El rol de la academia en el desarrollo de startups de alto impacto y la experiencia en Práctica Profesional NRC-9341, aplicando conocimientos de Ingeniería de Software.',
      date: '8 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '14 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Validación de Mercado y Tendencias FinTech para SuscriPago',
      excerpt: 'Análisis de mercado de suscripciones digitales, estrategias de Growth Hacking y proyecciones a 5 años para el emprendimiento.',
      date: '6 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '16 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop'
    }
  ]

  const filteredPosts = posts.map(post => ({
    ...post,
    videoUrl: VIDEO_URL,
    videoThumbnail: VIDEO_THUMBNAIL
  })).filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Obtener el color del texto para la categoría seleccionada
  const getCategoryColor = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId)
    return cat ? cat.color : 'text-white'
  }

  return (
    <div className="bg-deep-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="inline-flex items-center gap-3 justify-center">
              <BookIcon size={34} className="text-electric" /> Blog de Emprendimiento
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Formalización de documentos y plan de formación para emprendedores
          </p>
          <div className="mt-4 text-sm text-gray-400">
            <span className="inline-block px-3 py-1 bg-electric/20 border border-electric/30 rounded-full">
              <span className="inline-flex items-center gap-2">
                <GraduationIcon size={14} className="text-electric" /> Proyecto de Práctica Profesional - NRC-9341
              </span>
            </span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-midnight/50 border border-midnight rounded-xl p-6 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-deep-black border border-midnight rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric transition-colors"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-electric text-white shadow-lg shadow-electric/25 border border-electric/50'
                      : 'bg-deep-black text-gray-400 border border-midnight hover:border-electric hover:text-white hover:bg-midnight/50'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <category.icon size={14} className={selectedCategory === category.id ? 'text-white' : category.color} />
                    <span className={selectedCategory === category.id ? 'text-white' : category.color}>
                      {category.label}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Indicador de categoría seleccionada */}
          {selectedCategory !== 'Todos' && (
            <div className="mt-3 text-sm text-gray-400 border-t border-midnight pt-3">
              <span className="text-white font-medium">Categoría seleccionada:</span>{' '}
              {(() => {
                const selected = categories.find(c => c.id === selectedCategory)
                const SelectedIcon = selected?.icon || BookIcon

                return (
                  <span className={`inline-flex items-center gap-2 ${getCategoryColor(selectedCategory)}`}>
                    <SelectedIcon size={14} />
                    {selected?.label}
                  </span>
                )
              })()}
              <button 
                onClick={() => setSelectedCategory('Todos')}
                className="ml-3 text-electric hover:text-electric/80 text-xs"
              >
                [Limpiar filtro]
              </button>
            </div>
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="group bg-midnight/30 border border-midnight rounded-xl overflow-hidden hover:border-electric transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent opacity-70"></div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-deep-black/80 text-white text-xs rounded-full border border-electric/30 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-electric transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-midnight flex justify-between items-center">
                    <span className="text-gray-400 text-xs inline-flex items-center gap-2">
                      <PenIcon size={14} className="text-electric" /> {post.author}
                    </span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-electric text-sm group-hover:translate-x-1 transition-transform font-medium"
                    >
                      <span className="inline-flex items-center gap-2">
                        Leer más <ArrowRightIcon size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-midnight/30 border border-midnight rounded-xl">
              <p className="text-gray-400">No se encontraron artículos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog
