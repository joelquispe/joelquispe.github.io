"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Award, Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Desarrollador Full Stack Multiplataforma",
    location: "Remoto",
    period: "Enero 2022 - Actualidad",
    duration: "2+ años",
    description: [
      "Desarrollo de apps móviles y web con Flutter, Swift y React.",
      "Diseño de lógica de negocio y patrones escalables.",
      "Gestión de clientes y liderazgo de equipos pequeños.",
      "Enseñanza personalizada en desarrollo de software."
    ],
    technologies: ["Angular", "React", "Flutter", "Swift", "Laravel", "PHP", "JavaScript", "Docker", "Firebase", "Figma", "MySQL"],
    achievements: [
      "Entrega puntual y con altos estándares.",
      "Ambiente colaborativo y eficiente."
    ],
  },
  {
    id: 2,
    company: "Delfosti",
    position: "Programador Frontend",
    location: "Lima, Perú",
    period: "Mayo 2024 - Julio 2024",
    duration: "3 meses",
    description: [
      "Desarrollo frontend en Angular con arquitectura hexagonal.",
      "Colaboración con UI/UX y resolución de bugs en producción."
    ],
    technologies: ["Angular", "Angular Material", "TypeScript", "Scrum"],
    achievements: [
      "Mejoras en estabilidad y trabajo en equipo."
    ],
  },
  {
    id: 3,
    company: "Loyalty",
    position: "Programador Web",
    location: "Lima, Perú",
    period: "Abril 2023 - Diciembre 2023",
    duration: "8 meses",
    description: [
      "Desarrollo de interfaces con Angular y React.",
      "APIs con NestJS y despliegue en AWS.",
      "Integración con bases de datos y Flutter."
    ],
    technologies: ["Angular", "React", "NestJS", "AWS", "Docker", "Figma", "MongoDB", "Scrum"],
    achievements: [
      "Soluciones escalables y UI responsivas."
    ],
  },
  {
    id: 4,
    company: "Linkfast",
    position: "Desarrollador Full Stack",
    location: "Lima, Perú",
    period: "Mayo 2022 - Febrero 2023, Mayo 2024 - Junio 2024",
    duration: "1 año",
    description: [
      "Backend con Spring Boot y arquitectura hexagonal.",
      "Testing y desarrollo multiplataforma con Flutter."
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Flutter", "ArangoDB", "Swift"],
    achievements: [
      "Arquitectura sólida y pruebas automatizadas."
    ],
  },
  {
    id: 5,
    company: "IQNETING",
    position: "Desarrollador Full Stack",
    location: "Lima, Perú",
    period: "Febrero 2022 - Febrero 2023",
    duration: "1 año",
    description: [
      "Apps móviles en Flutter y web en Angular.",
      "Backend en Laravel y despliegue en tiendas móviles.",
      "Gestión de proyectos y contacto con clientes."
    ],
    technologies: ["Angular", "Flutter", "Figma", "Firebase", "Laravel", "MySQL", "Scrum"],
    achievements: [
      "Apps lanzadas exitosamente y buena gestión de proyectos."
    ],
  },
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Profesional</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Más de 4 años desarrollando aplicaciones multiplataforma y soluciones web escalables
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Punto en la timeline */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 md:translate-y-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                    <Briefcase className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>

                {/* Contenido - Responsive layout */}
                <div className={`w-full pl-12 md:pl-0 ${
                  index % 2 === 0 
                    ? "md:pr-8 md:ml-0 md:w-5/12" 
                    : "md:pl-8 md:ml-auto md:w-5/12"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 mb-2 text-blue-600 dark:text-blue-400">
                        <Building className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span className="font-semibold text-base sm:text-lg break-words">{experience.company}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight break-words">{experience.position}</h3>

                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm break-words">{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{experience.location}</span>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm w-fit">
                          {experience.duration}
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="mb-4 sm:mb-6">
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base leading-relaxed break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 break-words"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logros */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>Logros destacados:</span>
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start space-x-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm leading-relaxed break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resumen de experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Resumen de Experiencia</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">4+</div>
                <div className="text-blue-100 text-sm sm:text-base">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100 text-sm sm:text-base">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
