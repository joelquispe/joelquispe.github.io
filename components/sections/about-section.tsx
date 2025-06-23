"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  Code2,
  Users,
  Code,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
  GitlabIcon as Gitlab,
  Phone,
  Music,
  Video,
} from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "🟨", level: 95 },
  { name: "TypeScript", icon: "🔷", level: 90 },
  { name: "React", icon: "⚛️", level: 95 },
  { name: "Angular", icon: "🅰️", level: 90 },
  { name: "Next.js", icon: "▲", level: 90 },
  { name: "Node.js", icon: "🟢", level: 85 },
  { name: "NestJS", icon: "🧱", level: 85 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "Spring Boot", icon: "🌱", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 85 },
  { name: "PostgreSQL", icon: "🐘", level: 80 },
  { name: "MySQL", icon: "🐬", level: 85 },
  { name: "Swift", icon: "🧡", level: 80 },
  { name: "Xcode", icon: "📱", level: 75 },
  { name: "Flutter", icon: "💙", level: 90 },
  { name: "Android", icon: "🤖", level: 80 },
  { name: "iOS", icon: "📱", level: 80 },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yoecode",
    color: "hover:text-pink-500 dark:hover:text-pink-400",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/joelquispe",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/yoecode",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/invite/h9x3UbsPYp",
    color: "hover:text-indigo-500 dark:hover:text-indigo-400",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@yoecode",
    color: "hover:text-red-500 dark:hover:text-red-400",
  },
  {
    name: "GitLab",
    icon: Gitlab,
    href: "https://gitlab.com/jquispe",
    color: "hover:text-orange-600 dark:hover:text-orange-400",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/51960765839",
    color: "hover:text-green-500 dark:hover:text-green-400",
  },
  {
    name: "TikTok",
    icon: Music,
    href: "https://tiktok.com/@yoecode",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "Kick",
    icon: Video,
    href: "https://kick.com/yoecode",
    color: "hover:text-green-500 dark:hover:text-green-400",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Descripción personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Soy un Desarrollador Full Stack con más de 4 años de experiencia
                trabajando en proyectos freelance y en empresas. También
                gestiono un canal de YouTube, donde comparto contenido sobre
                programación y desarrollo de aplicaciones.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Me enfoco en crear soluciones escalables y de alta calidad,
                siempre optimizando el rendimiento y la experiencia del usuario.
                Busco nuevos desafíos para seguir aprendiendo y aportando valor
                en cada proyecto.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
                <Heart className="h-5 w-5" />
                <span>
                  "Camina siempre por la vida como si tuvieses algo nuevo que
                  aprender y lo harás"
                </span>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Conecta conmigo
              </h4>

              <div className="flex space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-200 shadow-md hover:shadow-lg`}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Foto personal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 dark:border-green-800"
              >
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Joel Sosaya - Desarrollador Full Stack"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
                {/* Overlay con silueta de animal */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </motion.div>

              {/* Elementos decorativos */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 text-blue-500"
              >
                <Code className="h-8 w-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-2 -left-2 text-slate-500"
              >
                <Code2 className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Tecnologías que manejo
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { icon: Code2, number: "10+", label: "Proyectos Completados" },
            { icon: Users, number: "10+", label: "Clientes Satisfechos" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 rounded-xl"
            >
              <stat.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
