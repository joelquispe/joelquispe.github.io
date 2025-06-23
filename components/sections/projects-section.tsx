"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Monitor,
  Laptop,
  PlayCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "Todos", icon: Monitor },
  { id: "web", name: "Web", icon: Monitor },
  { id: "mobile", name: "Móvil", icon: Smartphone },
  { id: "desktop", name: "Desktop", icon: Laptop },
];

const projects = [
  // Aplicaciones móviles
  {
    id: 1,
    title: "Developers",
    description:
      "Aplicación móvil donde muestro los cursos y contenido que subo en youtube sobre programación u otros temas",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.joel.appdevelopers",
    githubUrl: "https://github.com/joelquispe/Developers-App-Flutter.git",
  },
  {
    id: 2,
    title: "Delivery Box",
    description:
      "Calculo de paquete según su peso, altura etc. Consume un servicio donde te dan las paqueterías disponible para realizar el envío y la información de le da al dueño de la app.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.paqueterias.deliverybox",
  },
  {
    id: 3,
    title: "Shapp Rides",
    description:
      "Aplicación de delivery para los riders que reciben pedidos incluyendo las notificaciones que reciben y cuando cambia el estado del pedido así como también la actualización de sus datos personales.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.shap.riders",
  },
  {
    id: 5,
    title: "ExamGen Pro",
    description:
      "Plataforma web para crear y administrar exámenes personalizados con diferentes tipos de preguntas, temporizadores y análisis de resultados en tiempo real.",
    image: "https://i.postimg.cc/PJXzMj59/Screenshot-2025-06-23-at-4-36-46-AM.png",
    images: [
      "https://i.postimg.cc/PJXzMj59/Screenshot-2025-06-23-at-4-36-46-AM.png",
      "https://i.postimg.cc/Hn60ZhJx/Screenshot-2025-06-23-at-4-36-56-AM.png",
      "https://i.postimg.cc/QNmqdH63/Screenshot-2025-06-23-at-4-37-49-AM.png",
      "https://i.postimg.cc/HsL9cdK7/Screenshot-2025-06-23-at-4-37-58-AM.png",
    ],
    category: "web",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://examgen-pro.vercel.app",
    githubUrl: "https://github.com/joelquispe/examgen-pro",
  },
  {
    id: 4,
    title: "FitZone",
    description:
      "Tu gimnasio de confianza donde transformamos vidas a través del fitness y la nutrición.",
    image: "https://i.postimg.cc/GmTk9NZF/Screenshot-2025-06-22-at-6-08-49-PM.png",
    images: [
      "https://i.postimg.cc/GmTk9NZF/Screenshot-2025-06-22-at-6-08-49-PM.png",
      "https://i.postimg.cc/fLDX2bkC/Screenshot-2025-06-22-at-6-08-55-PM.png",
      "https://i.postimg.cc/mDj90GHs/Screenshot-2025-06-22-at-6-08-58-PM.png",
      "https://i.postimg.cc/wBhLQNx3/Screenshot-2025-06-22-at-6-09-04-PM.png",
      "https://i.postimg.cc/bNBxy8FY/Screenshot-2025-06-22-at-6-09-24-PM.png",
      "https://i.postimg.cc/nL8qm2J6/Screenshot-2025-06-22-at-6-09-31-PM.png",
    ],
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.fitzone.app",
  },
  {
    id: 7,
    title: "To-Do List - Swift",
    description:
      "Administra tus tareas en una lista de tareas que puedes agregar, borrar y editar.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    category: "mobile",
    technologies: ["Swift", "Xcode"],
    githubUrl: "https://github.com/joelquispe/TodoList-App-Swift",
  },
  

  // Aplicaciones web
  {
    id: 11,
    title: "LoyaltyPerú",
    description:
      "Página donde se ofrece los servicios de la empresa e información de sus clientes y trayectoria que han tenido.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["TypeScript", "React", "Tailwind"],
    demoUrl: "https://www.loyaltyperu.com/",
  },
  {
    id: 12,
    title: "Club de ganadores Dino",
    description:
      "Ofrece el canje de productos por puntos ganados con la tarjeta bonus para los clientes registrado y un panel para la administración de los productos, categorías y más.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["TypeScript", "Angular", "Bootstrap"],
    demoUrl: "https://clubdeganadoresdino.com/",
  },

  {
    id: 15,
    title: "YoeCode",
    description:
      "En esta página se muestra las redes sociales y plataformas de un creador de contenido y un apartado donde se puede enviar un mensaje privado de whatsApp.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["TypeScript", "NextJs", "Tailwind"],
    demoUrl: "https://yoecode.joelquispe.com",
    githubUrl: "https://github.com/joelquispe/YoeCode",
  },
  {
    id: 16,
    title: "Kajigger",
    description:
      "Página donde se ofrece los servicios de la empresa e información de sus clientes y trayectoria que han tenido.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["Swift", "SwiftUI", "Xcode"],
    demoUrl: "https://kajigger.com",
    githubUrl: "",
  },
  
];

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  technologies: string[];
  playStoreUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    resetZoom();
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    resetZoom();
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
      resetZoom();
    }
  };

  const prevImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
      resetZoom();
    }
  };

  const handleZoom = (delta: number, clientX?: number, clientY?: number) => {
    const zoomFactor = 0.1;
    const newZoom = Math.max(0.5, Math.min(3, zoomLevel + delta * zoomFactor));
    
    if (clientX && clientY) {
      // Zoom hacia el punto del cursor
      const rect = document.querySelector('.zoom-container')?.getBoundingClientRect();
      if (rect) {
        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;
        
        setImagePosition(prev => ({
          x: prev.x - (x * delta * zoomFactor),
          y: prev.y - (y * delta * zoomFactor)
        }));
      }
    }
    
    setZoomLevel(newZoom);
    
    // Reset position if zoom is back to 1
    if (newZoom === 1) {
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (zoomLevel === 1) {
      handleZoom(10, event.clientX, event.clientY);
    } else {
      resetZoom();
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: event.clientX - imagePosition.x, y: event.clientY - imagePosition.y });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -1 : 1;
    handleZoom(delta, event.clientX, event.clientY);
  };

  // Touch events for mobile
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; distance: number } | null>(null);

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) + 
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 1) {
      // Single touch for dragging
      if (zoomLevel > 1) {
        const touch = event.touches[0];
        setIsDragging(true);
        setDragStart({ x: touch.clientX - imagePosition.x, y: touch.clientY - imagePosition.y });
      }
    } else if (event.touches.length === 2) {
      // Pinch to zoom
      const distance = getTouchDistance(event.touches);
      const centerX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
      const centerY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
      setTouchStart({ x: centerX, y: centerY, distance });
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    event.preventDefault();
    
    if (event.touches.length === 1 && isDragging && zoomLevel > 1) {
      // Single touch dragging
      const touch = event.touches[0];
      setImagePosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    } else if (event.touches.length === 2 && touchStart) {
      // Pinch to zoom
      const distance = getTouchDistance(event.touches);
      const scale = distance / touchStart.distance;
      const newZoom = Math.max(0.5, Math.min(3, zoomLevel * scale));
      
      setZoomLevel(newZoom);
      setTouchStart(prev => prev ? { ...prev, distance } : null);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchStart(null);
  };

  // Manejo de teclas
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProject) {
        switch (event.key) {
          case "Escape":
            closeModal();
            break;
          case "ArrowRight":
            if (zoomLevel === 1) nextImage();
            break;
          case "ArrowLeft":
            if (zoomLevel === 1) prevImage();
            break;
          case "+":
          case "=":
            event.preventDefault();
            handleZoom(1);
            break;
          case "-":
            event.preventDefault();
            handleZoom(-1);
            break;
          case "0":
            event.preventDefault();
            resetZoom();
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, zoomLevel]);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Una colección de aplicaciones móviles y web desarrolladas con
            diferentes tecnologías
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300"
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Imagen del proyecto */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => project.images && project.images.length > 0 && openModal(project)}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Indicador de galería */}
                  {project.images && project.images.length > 0 && (
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {project.images.length} fotos
                    </div>
                  )}

                  {/* Botones de acción */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {(project.demoUrl || project.playStoreUrl) && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-gray-900 p-2"
                        asChild
                      >
                        <a
                          href={project.demoUrl || project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.playStoreUrl ? (
                            <PlayCircle className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-gray-900 p-2"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex space-x-3">
                    {(project.demoUrl || project.playStoreUrl) && (
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <a
                          href={project.demoUrl || project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.playStoreUrl ? (
                            <>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Play Store
                            </>
                          ) : (
                            <>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </>
                          )}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={`border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ${
                          project.demoUrl || project.playStoreUrl
                            ? "flex-1"
                            : "w-full"
                        }`}
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA para más proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Interesado en ver más proyectos o colaborar conmigo?
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hablemos de tu proyecto
          </Button>
        </motion.div>
      </div>

      {/* Modal de galería de imágenes */}
      {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Información del proyecto */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white p-3 rounded-lg max-w-xs">
              <h3 className="font-bold text-lg mb-1">{selectedProject.title}</h3>
              <p className="text-sm opacity-90 mb-1">
                {currentImageIndex + 1} de {selectedProject.images.length}
              </p>
              <p className="text-xs opacity-75">
                Doble clic o rueda para zoom
              </p>
            </div>

            {/* Carrusel de imágenes */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <div 
                className="zoom-container relative h-[70vh] flex items-center justify-center bg-black overflow-hidden"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onDoubleClick={handleDoubleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ 
                  cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                  touchAction: 'none' // Previene scroll en móviles
                }}
              >
                <div
                  className="transition-transform duration-200 ease-out"
                  style={{
                    transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${zoomLevel})`,
                    transformOrigin: 'center center'
                  }}
                >
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain select-none"
                    draggable={false}
                  />
                </div>

                {/* Controles de zoom */}
                <div className="absolute top-20 right-4 flex flex-col space-y-2 z-10">
                  <button
                    onClick={() => handleZoom(1)}
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    title="Zoom in (+)"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleZoom(-1)}
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    title="Zoom out (-)"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </button>
                  <button
                    onClick={resetZoom}
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    title="Reset zoom (0)"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>

                {/* Indicador de zoom */}
                {zoomLevel !== 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                )}

                {/* Botones de navegación */}
                {selectedProject.images.length > 1 && zoomLevel === 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Indicadores de puntos */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? "bg-blue-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Información del proyecto en la parte inferior */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex space-x-3">
                  {(selectedProject.demoUrl || selectedProject.playStoreUrl) && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      asChild
                    >
                      <a
                        href={selectedProject.demoUrl || selectedProject.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedProject.playStoreUrl ? (
                          <>
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Play Store
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </>
                        )}
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      asChild
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
