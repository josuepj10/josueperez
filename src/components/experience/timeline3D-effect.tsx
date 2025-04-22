"use client";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Variants para animación de entrada escalonada
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

// Array de experiencias: reemplaza o extiende con tus datos
const experiences = [
  {
    title: 'Project Manager & Full-Stack Developer - Aacrom University',
    date: '06/2022 – Presente',
    description: 'Dirijo proyectos e-learning para el ICT y desarrollo soluciones full-stack en PHP, Twig, Vue.js, AWS y Moodle.'
  },
  {
    title: 'Full Stack Developer - Bizflow SRL',
    date: '12/2023 – 03/2024',
    description: 'Desarrollo de aplicación web para automatizar procesos de negocio y módulos especializados.'
  },
  // Añade más eventos según tu CV
];

const Timeline = () => {
  return (
    <section className="relative container mx-auto px-6 py-12">
      {/* Línea central solo en escritorio */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-gray-300 transform -translate-x-1/2" />

      {/* Contenedor animado con entrada escalonada */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-16"
      >
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          const card = (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full max-w-md mx-auto"
            >
              <Tilt
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={1000}
                transitionSpeed={400}
                scale={1}
                className="w-full"
              >
                <Card className="w-full bg-transparent shadow-none">
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <time className="text-sm text-gray-500">{exp.date}</time>
                    <p className="mt-3 text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          );

          return (
            <div key={idx} className="relative flex flex-col md:flex-row items-center w-full">
              {/* Tarjeta móvil */}
              <div className="md:hidden mb-8">{card}</div>

              {/* Vista escritorio */}
              <div className="hidden md:flex items-center w-full">
                <div className={`w-1/2 ${isLeft ? 'pr-8 flex justify-end' : 'pl-8 flex justify-start'}`}>{isLeft && card}</div>

                {/* Punto central */}
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mx-2">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>

                <div className={`w-1/2 ${!isLeft ? 'pl-8 flex justify-start' : 'pr-8 flex justify-end'}`}>{!isLeft && card}</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Timeline;
