import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Teguilog transformó completamente nuestra presencia online. En 6 meses aumentamos nuestro tráfico orgánico un 300% y las ventas se duplicaron.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Ana García',
      company: 'Fashion Store Online',
      role: 'Directora de Marketing',
      content: 'Su expertise en SEO local nos posicionó como la tienda de moda número 1 en nuestra ciudad. El ROI ha sido increíble.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Roberto Silva',
      company: 'Clínica Dental Sonrisa',
      role: 'Director',
      content: 'Gracias a las estrategias de Teguilog, ahora tenemos una agenda llena de pacientes nuevos cada mes. Profesionalismo excepcional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonios reales de empresas que han transformado su presencia digital con nosotros
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-200 dark:border-gray-600"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Proyectos Exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Soporte Disponible</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;