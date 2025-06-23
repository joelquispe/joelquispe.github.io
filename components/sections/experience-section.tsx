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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Profesional</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Más de 4 años desarrollando aplicaciones multiplataforma y soluciones web escalables
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                {/* Punto en la timeline */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 md:translate-y-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-2 text-blue-600 dark:text-blue-400">
                        <Building className="h-5 w-5" />
                        <span className="font-semibold text-lg">{experience.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.position}</h3>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                          {experience.duration}
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="mb-6">
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logros */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>Logros destacados:</span>
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Espacio vacío para el otro lado en desktop */}
                <div className="hidden md:block w-5/12"></div>
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
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Resumen de Experiencia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-blue-100">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100">Proyectos Completados</div>
              </div>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
