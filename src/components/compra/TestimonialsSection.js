// components/compra/TestimonialsSection.js
"use client"; // Marcador para componente cliente

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

//Componente actualizado para el carrusel de imágenes (muestra 3 a la vez)
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Función para obtener los índices de las 3 imágenes que se muestran actualmente
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % totalImages;
      indices.push(index);
    }
    return indices;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden mb-6">
      {/* Controles de navegación */}
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-70 text-primary p-2 rounded-full hover:bg-opacity-90 transition-all"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-70 text-primary p-2 rounded-full hover:bg-opacity-90 transition-all"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
      
      {/* Grid de 3 imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
        {visibleIndices.map((imgIndex) => (
          <div key={imgIndex} className="relative aspect-video bg-gray-200 rounded overflow-hidden">
            <Image
              src={images[imgIndex]}
              alt={`Imagen del taller ${imgIndex + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      
      {/* Indicadores de página */}
      <div className="py-3 flex justify-center">
        {[...Array(totalImages)].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-all ${
              visibleIndices.includes(index) ? 'bg-primary w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Nuevo componente para los videos de testimonios
const VideoTestimonial = ({ src, thumbnail, title, person, role }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <div className="aspect-video relative bg-gray-800 overflow-hidden">
          {!isPlaying && (
            <div className="absolute inset-0 z-10">
              <Image
                src={thumbnail || "/images/video-placeholder.jpg"}
                alt={`Testimonio de ${person}`}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  onClick={togglePlay}
                  className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-opacity-90 transition-all"
                >
                  <FaPlay className="ml-1" size={24} />
                </button>
              </div>
            </div>
          )}
          <video 
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-primary text-lg">{title}</h3>
        <p className="text-gray-700 font-medium">{person}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  // Datos de los videos de testimonios
  const videoTestimonials = [
    {
      src: "/videos/testimonio1.mp4", // Ajusta con la ruta correcta a tus videos
      // thumbnail: "/images/testimonios/thumb1.jpg", // Opcional: imagen de vista previa
      title: "Mi experiencia con la certificación",
      person: "Itzel Montilla",
      role: "Cooperativa de Ahorro y Crédito Empleados Clínica Nacional, R.L."
    },
    {
      src: "/videos/testimonio2.mp4",
      // thumbnail: "/images/testimonios/thumb2.jpg",
      title: "Cómo mejoró nuestros procesos",
      person: "Jason Camaño",
      role: "Cooperativa Empleados del Hospital del Niño"
    },
    {
      src: "/videos/testimonio3.mp4",
      // thumbnail: "/images/testimonios/thumb3.jpg",
      title: "Resultados tras la implementación",
      person: "Maria Eugenia Vergara Barrios",
      role: "Cooperativa de Servicios Múltiples Nacional de Jurista y Profesionales, R.L."
    }
  ];

  const workshopImages = [
    "/images/talleres/taller1.jpeg",
    "/images/talleres/taller2.jpeg",
    "/images/talleres/taller3.jpeg",
    "/images/talleres/taller4.jpeg",
    "/images/talleres/taller5.jpeg",
    "/images/talleres/taller6.jpeg",
    "/images/talleres/taller7.jpeg",
    "/images/talleres/taller8.jpeg",
    "/images/talleres/taller9.jpeg",
    "/images/talleres/taller10.jpeg",
    "/images/talleres/taller11.jpeg",
    "/images/talleres/taller12.jpeg",
    "/images/talleres/taller13.jpeg",
    "/images/talleres/taller14.jpeg",
    "/images/talleres/taller15.jpeg",
    "/images/talleres/taller16.jpeg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            TESTIMONIOS DE ÉXITO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escucha directamente de profesionales que han transformado su enfoque hacia la gestión de riesgos
          </p>
        </motion.div>
        
        {/* Videos de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videoTestimonials.map((video, index) => (
            <VideoTestimonial
              key={index}
              src={video.src}
              // thumbnail={video.thumbnail}
              title={video.title}
              person={video.person}
              role={video.role}
            />
          ))}
        </div>
        
        {/* Título de galería de imágenes */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary">
            Galería de nuestros talleres
          </h3>
          <p className="text-gray-600">
            Conoce el ambiente y la dinámica de nuestras capacitaciones presenciales
          </p>
        </div>
        
        {/* Carrusel de imágenes más pequeño */}
        <div className="max-w-4xl mx-auto">
          <ImageCarousel images={workshopImages} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;