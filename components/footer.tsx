"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Code2, Instagram, MessageCircle, Facebook, Gitlab, Youtube, Music, Phone, Video } from "lucide-react"

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


export default function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo y mensaje */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Joel Sosaya</span>
            </div>
            
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors duration-200"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-blue-200 text-sm"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© 2025 Joel Sosaya. Derechos reservados</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
