import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';
import { automationTools, seoTools, programmingLangs } from '../../utils/iconsApp';

const Hero: React.FC = () => {
  // Estadísticas
  const stats = [
    { value: '500+', label: 'Clientes Satisfechos', icon: Users },
    { value: '98%', label: 'Tasa de Éxito', icon: Award },
    { value: '250%', label: 'ROI Promedio', icon: TrendingUp },
  ];

  // Componente carrusel vertical
  const VerticalCarousel = ({ items, direction = 'up', delay = 0 }: { 
  items: Array<{ name: string; icon: string }>, 
  direction?: 'up' | 'down',
  delay?: number 
}) => {
  // Triplicamos los items para crear un efecto infinito suave
  const infiniteItems = [...items, ...items, ...items];
  const itemHeight = 72; // altura de cada item + gap
  const totalHeight = items.length * itemHeight;
    
  return (
    <div className="relative h-80 lg:h-96 overflow-hidden">
      <motion.div
        className="flex flex-col space-y-4"
        initial={{
          y: direction === 'up' ? -totalHeight : 0
        }}
        animate={{
          y: direction === 'up' ? 0 : -totalHeight
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
          repeatType: "loop"
        }}
      >
        {infiniteItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 min-h-[64px] flex items-center justify-center hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-16 h-8 lg:w-20 lg:h-10 object-contain mx-auto" 
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gray-900 dark:text-white">Impulsa tu</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Presencia Digital
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Especialistas en <strong>SEO</strong>, <strong>Marketing Digital</strong> y <strong>Automatizaciones</strong>. 
                Transformamos tu negocio con estrategias que generan resultados reales.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="group"
                href="/contacto"
              >
                Obtener Presupuesto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/casos-exito"
              >
                Ver Casos de Éxito
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Carousels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Left Carousel - Automation Tools (moving down) */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
                  Automatizaciones
                </h3>
                <VerticalCarousel 
                  items={automationTools} 
                  direction="down" 
                  delay={0} 
                />
              </div>

              {/* Middle Carousel - SEO Tools (moving up) */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
                  SEO
                </h3>
                <VerticalCarousel 
                  items={seoTools} 
                  direction="up" 
                  delay={0} 
                />
              </div>

              {/* Right Carousel - Programming Languages (moving down) */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
                  Programación
                </h3>
                <VerticalCarousel 
                  items={programmingLangs} 
                  direction="down" 
                  delay={0} 
                />
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
