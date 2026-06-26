import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  GraduationIcon,
  MessageIcon,
  PlayIcon,
  VideoIcon,
  replaceEmojiIcons
} from '../components/ui/Icons'

const PostDetail = () => {
  const { id } = useParams()
  const VIDEO_URL = 'https://youtu.be/yapoE7lchkI'
  
  const posts = {
    1: {
      title: 'De la Idea al Papel: Documentos Clave para Formalizar tu Emprendimiento',
      date: '20 de junio, 2026',
      category: 'Formalización',
      readTime: '8 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Referencia académica:</span> Basado en Chiavenato, I. (2022). <em class="text-white">Comportamiento Organizacional</em> (pp. 31-54) y Whetten, D. A. & Cameron, K. S. (2022). <em class="text-white">Desarrollo de habilidades directivas</em> (pp. 213-250).</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔍 Introducción</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La formalización de un emprendimiento es el proceso mediante el cual una idea de negocio se transforma en una empresa legalmente constituida y operativa. Este proceso requiere una serie de documentos que no solo cumplen con requisitos legales, sino que también establecen las bases para el crecimiento y la sostenibilidad del negocio.</p>
        
        <div class="bg-midnight/30 p-6 rounded-xl border border-midnight my-6">
          <p class="text-gray-300 text-sm italic">"La formalización no es un obstáculo, es el cimiento sobre el cual se construye un negocio sostenible."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📋 1. Plan de Negocios</h2>
        <p class="text-gray-300 leading-relaxed mb-4">El plan de negocios es el documento fundamental que describe la visión, misión, objetivos, estrategias y proyecciones financieras del emprendimiento. Según Chiavenato (2022), el plan de negocios es esencial porque:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🎯 Guía las decisiones estratégicas:</strong> Proporciona un marco para la toma de decisiones informadas.</li>
          <li class="text-gray-300"><strong class="text-white">💰 Atrae inversionistas:</strong> Demuestra la viabilidad del negocio y su potencial de crecimiento.</li>
          <li class="text-gray-300"><strong class="text-white">📊 Define el modelo de negocio:</strong> Establece cómo se generarán ingresos y se mantendrá la sostenibilidad.</li>
        </ul>
        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">💡 Tip:</span> Un plan de negocios bien estructurado debe incluir: análisis de mercado, estrategia de marketing, plan operativo y proyecciones financieras.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">⚖️ 2. Constitución Legal y Documentos de Registro</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La constitución legal es el proceso mediante el cual se da existencia jurídica a la empresa. Los documentos clave incluyen:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📜 Escritura de constitución:</strong> Documento notarial que establece la naturaleza jurídica de la empresa (SAS, LTDA, etc.).</li>
          <li class="text-gray-300"><strong class="text-white">🏛️ Registro Mercantil:</strong> Inscripción en la Cámara de Comercio que da publicidad a la existencia de la empresa.</li>
          <li class="text-gray-300"><strong class="text-white">🔢 Registro Único Tributario (RUT):</strong> Número de identificación tributaria para cumplir con obligaciones fiscales.</li>
          <li class="text-gray-300"><strong class="text-white">📝 Licencias y permisos:</strong> Autorizaciones específicas según el sector de actividad.</li>
        </ul>
        <div class="bg-midnight/30 p-4 rounded-lg border border-midnight my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-white">📌 Nota:</span> La Corporación Universitaria Minuto de Dios (2018) enfatiza la importancia del cumplimiento normativo como base para la sostenibilidad empresarial.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔒 3. Documentos de Propiedad Intelectual</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Para proteger las ideas innovadoras y los activos intangibles, es fundamental contar con documentos que resguarden la propiedad intelectual:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">®️ Registro de marca:</strong> Protege el nombre y logotipo del negocio.</li>
          <li class="text-gray-300"><strong class="text-white">©️ Derechos de autor:</strong> Para contenido original, software y obras creativas.</li>
          <li class="text-gray-300"><strong class="text-white">💡 Patentes:</strong> Para invenciones y desarrollos tecnológicos únicos.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">💰 4. Documentos Financieros y Contables</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La gestión financiera formal requiere documentos que respalden las operaciones económicas:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📊 Presupuesto inicial y proyecciones:</strong> Estimación de ingresos y gastos para el primer año.</li>
          <li class="text-gray-300"><strong class="text-white">📈 Estados financieros:</strong> Balance general, estado de resultados y flujo de caja.</li>
          <li class="text-gray-300"><strong class="text-white">📒 Registros contables:</strong> Libros de contabilidad y comprobantes de ingresos y egresos.</li>
        </ul>
        <div class="bg-green-500/10 border border-green-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-green-400">✅ Clave:</span> Osorio Atehortúa et al. (2022) señalan que la formalización financiera es crucial para medir y garantizar la sostenibilidad empresarial.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🎯 Conclusión</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La formalización de documentos no es solo un requisito legal, sino una herramienta estratégica que permite al emprendedor tener claridad sobre su negocio, tomar decisiones informadas y construir una base sólida para el crecimiento. Como lo plantean Whetten & Cameron (2022), las habilidades directivas, incluyendo la gestión documental y la planificación, son fundamentales para el éxito empresarial.</p>
      `
    },
    2: {
      title: 'El Plan de Formación: El Mapa que Guía tu Éxito Empresarial',
      date: '18 de junio, 2026',
      category: 'Planificación',
      readTime: '10 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Referencia académica:</span> Basado en Whetten, D. A. & Cameron, K. S. (2022). <em class="text-white">Desarrollo de habilidades directivas</em> (pp. 213-250) y Chiavenato, I. (2022). <em class="text-white">Comportamiento Organizacional</em> (pp. 31-54).</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔍 Introducción</h2>
        <p class="text-gray-300 leading-relaxed mb-4">El plan de formación es un documento estratégico que define las habilidades, conocimientos y competencias que un emprendedor y su equipo deben desarrollar para garantizar el éxito y la sostenibilidad del negocio. Este plan no solo es un requisito formal, sino una herramienta fundamental para el crecimiento empresarial.</p>

        <div class="bg-midnight/30 p-6 rounded-xl border border-midnight my-6">
          <p class="text-gray-300 text-sm italic">"El aprendizaje continuo es el combustible que impulsa el crecimiento empresarial."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">❓ ¿Por qué es importante el plan de formación?</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Según Whetten & Cameron (2022), el desarrollo de habilidades directivas es esencial para la gestión efectiva de organizaciones. Un plan de formación estructurado permite:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🔍 Identificar brechas de conocimiento:</strong> Diagnosticar las áreas donde se requiere capacitación.</li>
          <li class="text-gray-300"><strong class="text-white">💪 Fortalecer competencias clave:</strong> Desarrollar habilidades técnicas y blandas necesarias para el negocio.</li>
          <li class="text-gray-300"><strong class="text-white">🔄 Adaptarse a cambios del mercado:</strong> Mantener al equipo actualizado en tendencias y tecnologías.</li>
          <li class="text-gray-300"><strong class="text-white">📈 Mejorar la productividad:</strong> Optimizar el desempeño individual y organizacional.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🧩 Componentes del Plan de Formación</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Un plan de formación efectivo debe incluir los siguientes elementos:</p>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">📊 1. Diagnóstico de Necesidades de Capacitación</h3>
        <p class="text-gray-300 leading-relaxed mb-4">El primer paso es identificar qué habilidades y conocimientos requiere el emprendimiento. Chiavenato (2022) enfatiza la importancia de alinear las competencias del personal con los objetivos organizacionales.</p>
        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📋 Métodos:</span> Evaluaciones de desempeño, análisis de competencias, encuestas y entrevistas al equipo.</p>
        </div>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">🎯 2. Objetivos de Formación</h3>
        <p class="text-gray-300 leading-relaxed mb-4">Los objetivos deben ser específicos, medibles, alcanzables, relevantes y con un tiempo definido (SMART).</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📌 Objetivo General:</strong> Desarrollar habilidades directivas para la gestión efectiva del emprendimiento.</li>
          <li class="text-gray-300"><strong class="text-white">📌 Objetivos Específicos:</strong> Capacitar al equipo en herramientas digitales, mejorar habilidades de liderazgo y fortalecer competencias en marketing digital.</li>
        </ul>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">📚 3. Contenidos y Metodologías</h3>
        <p class="text-gray-300 leading-relaxed mb-4">Los contenidos deben estar alineados con los objetivos identificados. Las metodologías pueden incluir:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🏫 Capacitación presencial:</strong> Talleres y seminarios.</li>
          <li class="text-gray-300"><strong class="text-white">💻 Formación virtual:</strong> Cursos en línea y webinars.</li>
          <li class="text-gray-300"><strong class="text-white">📖 Aprendizaje autodirigido:</strong> Lecturas y materiales de estudio.</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Mentoría y coaching:</strong> Acompañamiento personalizado.</li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">⏰ Importante:</span> Definir tiempos y recursos necesarios para la implementación del plan.</p>
        </div>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">📊 4. Evaluación y Seguimiento</h3>
        <p class="text-gray-300 leading-relaxed mb-4">Para garantizar la efectividad del plan, se deben establecer mecanismos de evaluación:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">😊 Evaluación de reacción:</strong> Satisfacción de los participantes.</li>
          <li class="text-gray-300"><strong class="text-white">📝 Evaluación de aprendizaje:</strong> Medición de conocimientos adquiridos.</li>
          <li class="text-gray-300"><strong class="text-white">👔 Evaluación de comportamiento:</strong> Aplicación de lo aprendido en el trabajo.</li>
          <li class="text-gray-300"><strong class="text-white">📈 Evaluación de resultados:</strong> Impacto en el desempeño y la productividad.</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-green-400">✅ Conclusión clave:</span> El plan de formación es una herramienta práctica para el desarrollo empresarial, fundamental para la sostenibilidad y el crecimiento de cualquier organización.</p>
        </div>
      `
    },
    3: {
      title: 'SuscriPago: Un Caso Práctico de Formalización y Sostenibilidad',
      date: '15 de junio, 2026',
      category: 'Casos Prácticos',
      readTime: '12 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Referencia académica:</span> Basado en Osorio Atehortúa, U. A. et al. (2022). <em class="text-white">Validación de un instrumento para la medición de la sostenibilidad empresarial</em> (pp. 24-34) y Chiavenato, I. (2022). <em class="text-white">Comportamiento Organizacional</em> (pp. 31-54).</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔍 Introducción</h2>
        <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">SuscriPago</strong> es un emprendimiento digital que ofrece contenido especializado sobre suscripciones y emprendimiento. Este caso práctico demuestra cómo la formalización de documentos y el plan de formación son fundamentales para la sostenibilidad y el éxito de un proyecto empresarial.</p>

        <div class="bg-midnight/30 p-6 rounded-xl border border-midnight my-6">
          <p class="text-gray-300 text-sm italic">"La formalización no es un gasto, es una inversión en el futuro de tu emprendimiento."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🚀 Descripción del Producto/Servicio</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago es una plataforma que ofrece:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📚 Contenido educativo:</strong> Artículos, guías y recursos sobre emprendimiento y formalización.</li>
          <li class="text-gray-300"><strong class="text-white">💬 Asesoría personalizada:</strong> Consultoría para emprendedores sobre documentos y planificación.</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Comunidad de emprendedores:</strong> Espacio para compartir experiencias y conocimientos.</li>
          <li class="text-gray-300"><strong class="text-white">📧 Newsletter especializado:</strong> Información actualizada sobre tendencias y oportunidades.</li>
        </ul>
        <div class="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-purple-400">💡 Modelo de negocio:</span> Suscripciones recurrentes que generan ingresos predecibles y construyen una comunidad de usuarios comprometidos.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📋 Documentos de Formalización de SuscriPago</h2>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">📊 1. Plan de Negocios</h3>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🎯 Misión:</strong> Empoderar a emprendedores a través de contenido de calidad y herramientas prácticas.</li>
          <li class="text-gray-300"><strong class="text-white">👁️ Visión:</strong> Ser la plataforma de referencia para emprendedores en América Latina.</li>
          <li class="text-gray-300"><strong class="text-white">📈 Estrategia:</strong> Ofrecer contenido diferenciado, construir comunidad y expandir servicios.</li>
          <li class="text-gray-300"><strong class="text-white">📊 Proyecciones:</strong> Crecimiento sostenible con metas claras de ingresos y expansión.</li>
        </ul>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">⚖️ 2. Constitución Legal</h3>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago se constituyó como una Sociedad por Acciones Simplificada (SAS), siguiendo los requisitos establecidos por la Corporación Universitaria Minuto de Dios (2018) y la legislación colombiana.</p>

        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📌 Documentos legales:</span> Escritura de constitución, Registro Mercantil, RUT y licencias de funcionamiento.</p>
        </div>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">🔒 3. Propiedad Intelectual</h3>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">®️ Registro de marca:</strong> Protección del nombre y logotipo.</li>
          <li class="text-gray-300"><strong class="text-white">©️ Derechos de autor:</strong> Para todos los contenidos publicados.</li>
          <li class="text-gray-300"><strong class="text-white">📄 Términos de uso:</strong> Documento que regula el acceso y uso de la plataforma.</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📚 Plan de Formación de SuscriPago</h2>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">📊 1. Diagnóstico de Necesidades</h3>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300">📱 Marketing digital y gestión de comunidades.</li>
          <li class="text-gray-300">✍️ Creación de contenido y storytelling.</li>
          <li class="text-gray-300">👔 Habilidades directivas y liderazgo.</li>
          <li class="text-gray-300">💰 Gestión financiera para emprendedores.</li>
          <li class="text-gray-300">🛠️ Herramientas tecnológicas para la gestión.</li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">⏰ Cronograma:</span> Capacitación mensual con sesiones específicas. Presupuesto del 5% de los ingresos en formación.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🌱 Sostenibilidad y Pertinencia</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Como lo señalan Osorio Atehortúa et al. (2022), la sostenibilidad empresarial se mide a través de indicadores financieros, sociales y ambientales. En el caso de SuscriPago:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">💰 Indicadores financieros:</strong> Crecimiento de ingresos y rentabilidad.</li>
          <li class="text-gray-300"><strong class="text-white">👥 Indicadores sociales:</strong> Número de emprendedores impactados y comunidad activa.</li>
          <li class="text-gray-300"><strong class="text-white">🌍 Indicadores ambientales:</strong> Operación digital con bajo impacto ecológico.</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-xl my-6">
          <h3 class="text-lg font-bold text-green-400 mb-2">📌 Reflexión Final</h3>
          <p class="text-gray-300">La formalización y el plan de formación aseguran que los objetivos del proyecto de innovación se cumplan y determinan su sostenibilidad en el tiempo. Estos instrumentos son aplicables a cualquier nuevo emprendimiento, asegurando el camino para desarrollar ideas innovadoras.</p>
          <p class="text-gray-300 mt-2">Como lo enfatiza Chiavenato (2022), el comportamiento organizacional y la planificación estratégica son fundamentales para el éxito empresarial.</p>
        </div>
      `
    },
    4: {
      title: 'De Estudiante a Fundador: La Historia de SuscriPago',
      date: '12 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '15 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Contexto académico:</span> Proyecto de Práctica Profesional - NRC-9341<br/>
          <span class="text-gray-400">Corporación Universitaria Minuto de Dios - Ingeniería de Software</span></p>
        </div>

        <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl my-6">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🎓</span>
            <div>
              <h3 class="text-white font-bold">El Origen de una Startup</h3>
              <p class="text-gray-300 text-sm">De las aulas universitarias al mundo del emprendimiento FinTech</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🚀 El Sueño de un Estudiante de Ingeniería de Software</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Todo comenzó en las aulas de la <strong class="text-white">Corporación Universitaria Minuto de Dios</strong>, donde como estudiante de Ingeniería de Software, descubrí que la tecnología podía ser el vehículo perfecto para resolver problemas reales de las personas. La idea de <strong class="text-white">SuscriPago</strong> nació de una necesidad personal: gestionar mis propias suscripciones digitales de manera eficiente.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">💡</div>
            <h4 class="text-white font-semibold text-sm">Identificación del Problema</h4>
            <p class="text-gray-400 text-xs">Gestión ineficiente de suscripciones recurrentes</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🛠️</div>
            <h4 class="text-white font-semibold text-sm">Desarrollo del MVP</h4>
            <p class="text-gray-400 text-xs">Aplicación React Native con Supabase</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🚀</div>
            <h4 class="text-white font-semibold text-sm">Lanzamiento</h4>
            <p class="text-gray-400 text-xs">Publicación en App Store y Google Play</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📚 El Rol de la Academia en el Emprendimiento</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La <strong class="text-white">Práctica Profesional (NRC-9341)</strong> fue el catalizador que transformó una idea en un proyecto real. Aplicando los conocimientos adquiridos en:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📱 Desarrollo móvil:</strong> React Native, Expo, NativeWind</li>
          <li class="text-gray-300"><strong class="text-white">🗄️ Backend:</strong> Supabase, PostgreSQL, Edge Functions</li>
          <li class="text-gray-300"><strong class="text-white">💳 Pagos:</strong> StoreKit (iOS) y Google Play Billing</li>
          <li class="text-gray-300"><strong class="text-white">🔒 Seguridad:</strong> Clean Architecture, RLS, OWASP Top 10</li>
        </ul>

        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">🎯 Lección aprendida:</span> La academia no solo enseña teoría, sino que proporciona las herramientas para construir soluciones reales que impactan a la sociedad.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">💪 Los Desafíos del Camino</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Construir SuscriPago no fue fácil. Enfrenté desafíos técnicos y de negocio que pusieron a prueba mi formación como ingeniero:</p>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">🔧 Desafío 1: Publicación en App Store</h3>
        <p class="text-gray-300 leading-relaxed mb-4">Cumplir con las estrictas guías de Apple (Guideline 2.1, 2.3.1, 5.1.1v) requirió implementar:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300">✅ Eliminación de cuenta (GDPR)</li>
          <li class="text-gray-300">✅ Renombrar "Asesor IA" a "Asesor Financiero"</li>
          <li class="text-gray-300">✅ Política de privacidad pública</li>
          <li class="text-gray-300">✅ IAP nativo sin checkout web externo</li>
        </ul>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">💳 Desafío 2: Integración de Pagos</h3>
        <p class="text-gray-300 leading-relaxed mb-4">Implementar un flujo de pago seguro y confiable fue clave:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300">🔐 Validación server-side de recibos IAP</li>
          <li class="text-gray-300">📊 Edge Functions en Supabase</li>
          <li class="text-gray-300">🔄 Restauración de compras</li>
          <li class="text-gray-300">📝 Manejo de errores y edge cases</li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">⏳ Tiempo invertido:</span> 3 meses de desarrollo continuo, integrando teoría y práctica de la Ingeniería de Software.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🎯 Lecciones Aprendidas</h2>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📚 La teoría se valida en la práctica:</strong> Los conceptos de Clean Architecture, SOLID y seguridad son aplicables y necesarios en proyectos reales.</li>
          <li class="text-gray-300"><strong class="text-white">🤝 El ecosistema universitario es clave:</strong> Uniminuto proporcionó el espacio y los recursos para experimentar y aprender.</li>
          <li class="text-gray-300"><strong class="text-white">💡 El fracaso es parte del proceso:</strong> Cada error (builds fallidos, rechazos de Apple) fue una oportunidad de aprendizaje.</li>
          <li class="text-gray-300"><strong class="text-white">🚀 La perseverancia paga:</strong> Ver SuscriPago en la App Store es la recompensa de no rendirse.</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-xl my-6">
          <h3 class="text-lg font-bold text-green-400 mb-2">📌 Reflexión Final</h3>
          <p class="text-gray-300">SuscriPago no es solo una aplicación; es la materialización de un sueño académico y profesional. Como estudiante de Ingeniería de Software de Uniminuto, he demostrado que con pasión, disciplina y el apoyo adecuado, es posible transformar una idea en un negocio real.</p>
          <p class="text-gray-300 mt-2">Este proyecto es un testimonio de que <strong class="text-white">la innovación universitaria</strong> puede generar soluciones tecnológicas de alto impacto.</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-400 border-t border-midnight pt-4">
            <span>🎓</span>
            <span>Ingeniería de Software - Uniminuto</span>
            <span className="text-gray-500">|</span>
            <span className="text-electric">NRC-9341</span>
          </div>
        </div>
      `
    },
    5: {
      title: 'Arquitectura Financiera de SuscriPago: Innovación desde la Práctica Profesional',
      date: '10 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '18 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Referencia técnica:</span> Basado en Whetten, D. A. & Cameron, K. S. (2022). <em class="text-white">Desarrollo de habilidades directivas</em> (pp. 213-250).</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔍 Introducción</h2>
        <p class="text-gray-300 leading-relaxed mb-4"><strong class="text-white">SuscriPago</strong> nace como un proyecto de emprendimiento universitario que aplica principios de <strong class="text-white">Ingeniería de Software</strong> para resolver un problema real: la gestión eficiente de suscripciones digitales. Esta arquitectura fue diseñada durante la <strong class="text-white">Práctica Profesional (NRC-9341)</strong> en la Corporación Universitaria Minuto de Dios.</p>

        <div class="bg-midnight/30 p-6 rounded-xl border border-midnight my-6">
          <p class="text-gray-300 text-sm italic">"La tecnología bien aplicada transforma problemas cotidianos en soluciones escalables."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🏗️ Arquitectura de Software</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago sigue los principios de <strong class="text-white">Clean Architecture</strong>, separando claramente las capas:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <div class="text-3xl mb-2">🎨</div>
            <h4 class="text-white font-semibold text-sm">UI Layer</h4>
            <p class="text-gray-400 text-xs">React Native + Expo + NativeWind</p>
            <ul class="text-gray-500 text-xs mt-2 space-y-1">
              <li>• Screens y Components</li>
              <li>• Context API (SubscriptionContext)</li>
              <li>• Tema claro/oscuro</li>
            </ul>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <div class="text-3xl mb-2">🧠</div>
            <h4 class="text-white font-semibold text-sm">Domain Layer</h4>
            <p class="text-gray-400 text-xs">Lógica de negocio</p>
            <ul class="text-gray-500 text-xs mt-2 space-y-1">
              <li>• Servicios IAP</li>
              <li>• Notificaciones</li>
              <li>• Exportación de datos</li>
            </ul>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <div class="text-3xl mb-2">🗄️</div>
            <h4 class="text-white font-semibold text-sm">Data Layer</h4>
            <p class="text-gray-400 text-xs">Supabase + PostgreSQL</p>
            <ul class="text-gray-500 text-xs mt-2 space-y-1">
              <li>• Edge Functions</li>
              <li>• RLS (Row Level Security)</li>
              <li>• Migraciones SQL</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔐 Seguridad y Cumplimiento</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La seguridad fue una prioridad desde el inicio, aplicando prácticas de <strong class="text-white">OWASP Top 10</strong> y requisitos de las tiendas de aplicaciones:</p>

        <h3 class="text-xl font-semibold text-white mt-6 mb-3">🛡️ Medidas de Seguridad</h3>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🔑 Service Role Key:</strong> Solo en Edge Functions, nunca en el cliente</li>
          <li class="text-gray-300"><strong class="text-white">📊 RLS (Row Level Security):</strong> Todas las tablas tienen políticas de seguridad</li>
          <li class="text-gray-300"><strong class="text-white">🔐 Validación IAP:</strong> Server-side con Supabase Edge Functions</li>
          <li class="text-gray-300"><strong class="text-white">📝 Variables de entorno:</strong> EAS Secrets para credenciales</li>
        </ul>

        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">✅ Cumplimiento:</span> Apple Guideline 5.1.1v (eliminación de cuenta), 2.3.1 (no usar "IA"), y GDPR.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">💳 IAP nativo</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago implementa <strong class="text-white">In-App Purchases nativos</strong>:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🍎 iOS:</strong> StoreKit (suscripciones auto-renovables)</li>
          <li class="text-gray-300"><strong class="text-white">🤖 Android:</strong> Google Play Billing</li>
          <li class="text-gray-300"><strong class="text-white">🔄 Restauración:</strong> Recuperación de compras existentes</li>
          <li class="text-gray-300"><strong class="text-white">📊 Validación:</strong> Edge Function <em>validate-iap-receipt</em></li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">⏰ Tiempo de desarrollo:</span> 3 meses incluyendo integración, pruebas y publicación en App Store Connect.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📊 Lecciones Técnicas Aprendidas</h2>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🔍 Debugging en producción:</strong> Uso de Expo y EAS para logs y monitoreo</li>
          <li class="text-gray-300"><strong class="text-white">📱 Test en dispositivo físico:</strong> Simulador no es suficiente para IAP reales</li>
          <li class="text-gray-300"><strong class="text-white">📚 Documentación:</strong> Mantener <em>release-readiness-checklist.md</em> actualizado</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Colaboración:</strong> Aprendizaje continuo con la comunidad de Supabase y Expo</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-xl my-6">
          <h3 class="text-lg font-bold text-green-400 mb-2">📌 Reflexión Final</h3>
          <p class="text-gray-300">La arquitectura de SuscriPago demuestra que <strong class="text-white">la Ingeniería de Software</strong> puede aplicarse a emprendimientos reales con impacto social. Este proyecto es un ejemplo de cómo la academia y la práctica profesional se complementan para formar ingenieros capaces de resolver problemas complejos.</p>
          <p class="text-gray-300 mt-2">La experiencia de publicar en App Store y Google Play ha sido invaluable para comprender el ciclo de vida completo del software.</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-400 border-t border-midnight pt-4">
            <span>🎓</span>
            <span>Ingeniería de Software - Uniminuto</span>
            <span className="text-gray-500">|</span>
            <span className="text-electric">NRC-9341</span>
          </div>
        </div>
      `
    },
    6: {
      title: 'Innovación Universitaria: El Semillero Emprendedor de SuscriPago',
      date: '8 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '14 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Contexto académico:</span> Basado en la experiencia de Práctica Profesional - NRC-9341<br/>
          <span class="text-gray-400">Corporación Universitaria Minuto de Dios - Ingeniería de Software</span></p>
        </div>

        <div class="bg-purple-500/10 border border-purple-500/30 p-6 rounded-xl my-6">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🏫</span>
            <div>
              <h3 class="text-white font-bold">El Ecosistema Emprendedor Universitario</h3>
              <p class="text-gray-300 text-sm">Cómo Uniminuto impulsa la innovación desde las aulas</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🎓 El Valor de la Formación Universitaria</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La <strong class="text-white">Corporación Universitaria Minuto de Dios</strong> ha sido el semillero donde germinó SuscriPago. Más allá de la teoría, la universidad proporcionó:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📚 Conocimiento técnico:</strong> Ingeniería de Software con enfoque práctico</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Red de contactos:</strong> Profesores y compañeros que enriquecieron el proyecto</li>
          <li class="text-gray-300"><strong class="text-white">📋 Marco legal:</strong> Acuerdo 009 (2018) como referencia para la formalización</li>
          <li class="text-gray-300"><strong class="text-white">💡 Espacio para innovar:</strong> Libertad para explorar y experimentar</li>
        </ul>

        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📌 Cita:</span> "La educación no es solo aprender, es transformar el mundo que nos rodea."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📋 La Práctica Profesional como Catalizador</h2>
        <p class="text-gray-300 leading-relaxed mb-4">La <strong class="text-white">Práctica Profesional (NRC-9341)</strong> fue el puente entre la teoría y la práctica:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <h4 class="text-white font-semibold text-sm mb-2">🔍 Diagnóstico</h4>
            <p class="text-gray-400 text-xs">Identificación del problema de gestión de suscripciones en el entorno digital</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <h4 class="text-white font-semibold text-sm mb-2">🛠️ Desarrollo</h4>
            <p class="text-gray-400 text-xs">Creación del MVP con metodologías ágiles y Clean Architecture</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <h4 class="text-white font-semibold text-sm mb-2">📊 Validación</h4>
            <p class="text-gray-400 text-xs">Pruebas con usuarios reales y ajustes basados en feedback</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4">
            <h4 class="text-white font-semibold text-sm mb-2">🚀 Lanzamiento</h4>
            <p class="text-gray-400 text-xs">Publicación en App Store y Google Play, cumpliendo requisitos de las tiendas</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🤝 El Rol de la Comunidad Universitaria</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago no habría sido posible sin el apoyo de la comunidad:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">👨‍🏫 Profesores:</strong> Orientación académica y retroalimentación constante</li>
          <li class="text-gray-300"><strong class="text-white">👥 Compañeros:</strong> Pruebas beta y sugerencias de mejora</li>
          <li class="text-gray-300"><strong class="text-white">📚 Recursos:</strong> Acceso a bibliografía especializada y herramientas</li>
          <li class="text-gray-300"><strong class="text-white">💡 Inspiración:</strong> Ejemplos de otros emprendedores universitarios</li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">🌱 Semilla emprendedora:</span> Uniminuto fomenta el espíritu emprendedor desde el primer semestre.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📈 Impacto y Proyecciones</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago es un testimonio del <strong class="text-white">potencial innovador</strong> de los estudiantes de ingeniería:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📱 Aplicación en producción:</strong> Disponible en App Store y Google Play</li>
          <li class="text-gray-300"><strong class="text-white">📊 100+ usuarios:</strong> En fase beta cerrada</li>
          <li class="text-gray-300"><strong class="text-white">🔮 Futuro:</strong> Expansión a mercados internacionales</li>
          <li class="text-gray-300"><strong class="text-white">🎓 Legado:</strong> Inspirar a futuras generaciones de emprendedores</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-xl my-6">
          <h3 class="text-lg font-bold text-green-400 mb-2">📌 Reflexión Final</h3>
          <p class="text-gray-300">SuscriPago es más que una aplicación; es un símbolo de <strong class="text-white">innovación universitaria</strong>. Este proyecto demuestra que los estudiantes de Ingeniería de Software pueden crear soluciones tecnológicas de alto impacto cuando cuentan con el apoyo adecuado.</p>
          <p class="text-gray-300 mt-2">La <strong class="text-white">Corporación Universitaria Minuto de Dios</strong> ha sido el espacio perfecto para cultivar el espíritu emprendedor y la excelencia técnica.</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-400 border-t border-midnight pt-4">
            <span>🎓</span>
            <span>Ingeniería de Software - Uniminuto</span>
            <span className="text-gray-500">|</span>
            <span className="text-electric">NRC-9341</span>
          </div>
        </div>
      `
    },
    7: {
      title: 'Validación de Mercado y Tendencias FinTech para SuscriPago',
      date: '6 de junio, 2026',
      category: 'Emprendimiento',
      readTime: '16 min',
      author: 'Leonardo Mosquera',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1200&h=600&fit=crop',
      content: `
        <div class="bg-midnight/50 border-l-4 border-electric p-5 mb-8 rounded-r-lg">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">📚 Referencia académica:</span> Basado en Osorio Atehortúa, U. A. et al. (2022). <em class="text-white">Validación de un instrumento para la medición de la sostenibilidad empresarial</em> (pp. 24-34).</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔍 Introducción</h2>
        <p class="text-gray-300 leading-relaxed mb-4">El éxito de <strong class="text-white">SuscriPago</strong> no solo depende de su arquitectura técnica, sino de su <strong class="text-white">validación en el mercado</strong>. Este artículo analiza el contexto FinTech actual y cómo SuscriPago se posiciona como una solución innovadora.</p>

        <div class="bg-midnight/30 p-6 rounded-xl border border-midnight my-6">
          <p class="text-gray-300 text-sm italic">"El mercado no perdona a quienes ignoran las tendencias, pero recompensa a quienes las anticipan."</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📊 Análisis de Mercado</h2>
        <p class="text-gray-300 leading-relaxed mb-4">El mercado de las suscripciones digitales está en <strong class="text-white">crecimiento exponencial</strong>:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">📈</div>
            <h4 class="text-white font-semibold text-sm">Crecimiento Anual</h4>
            <p class="text-green-400 text-lg font-bold">+15%</p>
            <p class="text-gray-400 text-xs">Proyectado para 2026</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">👥</div>
            <h4 class="text-white font-semibold text-sm">Usuarios Globales</h4>
            <p class="text-green-400 text-lg font-bold">4.2B</p>
            <p class="text-gray-400 text-xs">Usuarios de suscripciones digitales</p>
          </div>
          <div class="bg-midnight/30 border border-midnight rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">💰</div>
            <h4 class="text-white font-semibold text-sm">Mercado FinTech</h4>
            <p class="text-green-400 text-lg font-bold">$340B</p>
            <p class="text-gray-400 text-xs">Valor del sector en 2026</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🎯 Posicionamiento de SuscriPago</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago se diferencia de la competencia por:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🎓 Enfoque académico:</strong> Proyecto universitario con validación técnica</li>
          <li class="text-gray-300"><strong class="text-white">🔐 Seguridad nativa:</strong> IAP validado server-side</li>
          <li class="text-gray-300"><strong class="text-white">📊 Transparencia:</strong> Métricas claras de optimización</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Comunidad:</strong> Enfoque en emprendedores y estudiantes</li>
        </ul>

        <div class="bg-electric/10 border border-electric/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-electric">💡 Ventaja competitiva:</span> SuscriPago combina tecnología de punta con una misión educativa y social.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">📋 Estrategias de Growth Hacking</h2>
        <p class="text-gray-300 leading-relaxed mb-4">Para escalar SuscriPago, se han implementado estrategias basadas en <strong class="text-white">Osorio Atehortúa et al. (2022)</strong>:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">📱 Marketing de contenido:</strong> Blog académico con recursos valiosos</li>
          <li class="text-gray-300"><strong class="text-white">🤝 Alianzas universitarias:</strong> Colaboración con Uniminuto</li>
          <li class="text-gray-300"><strong class="text-white">📊 Optimización SEO:</strong> Contenido relevante para emprendedores</li>
          <li class="text-gray-300"><strong class="text-white">📧 Email marketing:</strong> Newsletter con actualizaciones y tips</li>
        </ul>

        <div class="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg my-4">
          <p class="text-sm text-gray-300"><span class="font-bold text-amber-400">📈 Métricas clave:</span> 500+ visitas al mes, 25% de conversión en suscripciones al newsletter.</p>
        </div>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-midnight">🔮 Tendencias FinTech 2026</h2>
        <p class="text-gray-300 leading-relaxed mb-4">SuscriPago se alinea con las principales tendencias del sector:</p>
        <ul class="bg-midnight/30 p-5 rounded-xl border border-midnight space-y-2 mb-4">
          <li class="text-gray-300"><strong class="text-white">🤖 Automatización:</strong> Asesor financiero inteligente (no IA)</li>
          <li class="text-gray-300"><strong class="text-white">📱 Super Apps:</strong> Integración de múltiples servicios financieros</li>
          <li class="text-gray-300"><strong class="text-white">🔗 Open Banking:</strong> Conectividad con bancos (futuro roadmap)</li>
          <li class="text-gray-300"><strong class="text-white">🌍 Inclusión financiera:</strong> Acceso a herramientas para emprendedores</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-xl my-6">
          <h3 class="text-lg font-bold text-green-400 mb-2">📌 Reflexión Final</h3>
          <p class="text-gray-300">La validación de mercado de SuscriPago confirma que existe una <strong class="text-white">oportunidad real</strong> para soluciones de gestión de suscripciones. El proyecto está alineado con las tendencias FinTech y responde a las necesidades de un mercado en crecimiento.</p>
          <p class="text-gray-300 mt-2">Como proyecto universitario, SuscriPago demuestra que <strong class="text-white">la innovación no tiene límites</strong> cuando se combina conocimiento académico con visión empresarial.</p>
          <div class="mt-4 flex items-center gap-2 text-sm text-gray-400 border-t border-midnight pt-4">
            <span>🎓</span>
            <span>Ingeniería de Software - Uniminuto</span>
            <span className="text-gray-500">|</span>
            <span className="text-electric">NRC-9341</span>
          </div>
        </div>
      `
    }
  }

  const post = posts[id]
  const renderedContent = post ? replaceEmojiIcons(post.content) : ''

  if (!post) {
    return (
      <div className="bg-deep-black min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-electric hover:text-electric/80 mb-6 inline-block">
            ← Volver al blog
          </Link>
          <div className="bg-midnight/30 border border-midnight rounded-xl p-12 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h1>
            <p className="text-gray-400">El artículo que buscas no está disponible.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-deep-black min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-electric hover:text-electric/80 mb-6 font-medium">
          <ArrowLeftIcon size={16} className="mr-1" />
          Volver al blog
        </Link>

        <article className="bg-midnight/30 border border-midnight rounded-xl shadow-lg overflow-hidden">
          {/* Imagen destacada */}
          <div className="w-full h-64 md:h-96 overflow-hidden bg-deep-black">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-10 lg:p-12">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6">
              <span className="px-3 py-1 bg-electric/20 border border-electric/30 text-electric rounded-full font-medium text-xs tracking-wide uppercase">
                {post.category}
              </span>
              <span className="text-gray-500">•</span>
              <span>{post.date}</span>
              <span className="text-gray-500">•</span>
              <span>{post.readTime} de lectura</span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Autor */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-midnight">
              <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center text-white font-bold text-lg">
                LM
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-sm text-gray-400">Fundador de SuscriPago</p>
                <p className="text-xs text-electric inline-flex items-center gap-2">
                  <GraduationIcon size={12} /> Ingeniería de Software - Uniminuto
                </p>
              </div>
            </div>

            {/* Video complementario */}
            <div className="mb-8 bg-midnight/50 rounded-xl p-4 md:p-6 border border-midnight">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <VideoIcon size={22} className="mr-2 text-electric" /> Video Complementario
              </h3>
              <div className="bg-deep-black rounded-lg border border-midnight p-5 md:p-6">
                <p className="text-gray-300 mb-4">
                  Este video acompaña el contenido de este artículo y está disponible en YouTube.
                </p>
                <a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-electric px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-electric/80"
                >
                  <PlayIcon size={16} /> Ver video en YouTube
                </a>
              </div>
            </div>

            {/* Contenido del artículo */}
            <div className="prose prose-lg max-w-none text-gray-300">
              <style dangerouslySetInnerHTML={{
                __html: `
                  .blog-inline-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 1.1em;I
                    height: 1.1em;
                    vertical-align: -0.15em;
                    margin: 0 0.2em;
                  }
                  .blog-inline-icon svg {
                    display: block;
                  }
                  .prose h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #1A1953;
                  }
                  .prose h3 {
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #e5e7eb;
                    margin-top: 1.75rem;
                    margin-bottom: 0.75rem;
                  }
                  .prose p {
                    color: #d1d5db;
                    line-height: 1.8;
                    margin-bottom: 1.25rem;
                  }
                  .prose ul {
                    background: rgba(26, 25, 83, 0.3);
                    padding: 1.25rem 1.25rem 1.25rem 2.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid #1A1953;
                    margin: 1rem 0 1.5rem 0;
                  }
                  .prose ul li {
                    color: #d1d5db;
                    margin-bottom: 0.6rem;
                    line-height: 1.6;
                  }
                  .prose ul li:last-child {
                    margin-bottom: 0;
                  }
                  .prose ul li strong {
                    color: #ffffff;
                  }
                  .prose .grid {
                    display: grid;
                    gap: 1rem;
                  }
                  .prose .grid-cols-1 {
                    grid-template-columns: 1fr;
                  }
                  .prose .md\\:grid-cols-2 {
                    grid-template-columns: 1fr 1fr;
                  }
                  .prose .md\\:grid-cols-3 {
                    grid-template-columns: 1fr 1fr 1fr;
                  }
                  .prose .bg-midnight\\/50,
                  .prose .bg-midnight\\/30,
                  .prose .bg-electric\\/10,
                  .prose .bg-green-500\\/10,
                  .prose .bg-amber-500\\/10,
                  .prose .bg-purple-500\\/10 {
                    margin: 1.5rem 0;
                  }
                `
              }} />
              <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
            </div>
          </div>
        </article>

        {/* Suscripción */}
        <div className="mt-8 bg-gradient-to-r from-midnight to-deep-black border border-electric/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2 inline-flex items-center gap-2 justify-center">
            <MessageIcon size={22} /> ¿Te gustó este contenido?
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Suscríbete al newsletter de SuscriPago y recibe más guías y recursos para emprendedores.
          </p>
          <Link 
            to="/subscribe" 
            className="inline-block bg-electric hover:bg-electric/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-electric/25"
          >
            Suscribirse ahora
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
