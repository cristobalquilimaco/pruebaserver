import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Link, 
  MapPin, 
  Globe, 
  Settings, 
  MousePointer, 
  Video, 
  Share2, 
  Palette, 
  FileSearch,
  Users,
  ShoppingCart,
  BarChart3
} from 'lucide-react';
import Button from '../UI/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO',
      description: 'Optimización para motores de búsqueda que aumenta tu visibilidad orgánica.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Link,
      title: 'Link Building',
      description: 'Construcción de enlaces de calidad para mejorar tu autoridad de dominio.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'SEO Local',
      description: 'Posicionamiento local para captar clientes en tu zona geográfica.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'SEO Internacional',
      description: 'Estrategias globales para expandir tu presencia a nuevos mercados.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Settings,
      title: 'Optimización On/Off Page',
      description: 'Mejoras técnicas y de contenido para maximizar tu rendimiento.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: MousePointer,
      title: 'PPC',
      description: 'Campañas publicitarias pagadas con ROI garantizado.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Video,
      title: 'Producción de Video',
      description: 'Contenido audiovisual profesional para tu estrategia digital.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Share2,
      title: 'Gestión de Redes Sociales',
      description: 'Administración completa de tus perfiles sociales.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Palette,
      title: 'Diseño Web',
      description: 'Sitios web modernos, responsivos y optimizados para conversión.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: FileSearch,
      title: 'Auditorías',
      description: 'Análisis completo de tu presencia digital y oportunidades de mejora.',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: Users,
      title: 'Optimización UX',
      description: 'Mejora de la experiencia del usuario para aumentar conversiones.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: ShoppingCart,
      title: 'Optimización de Conversión',
      description: 'Estrategias para maximizar tus ventas y leads.',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            Nuestros <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales de marketing digital diseñadas para impulsar tu crecimiento online
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary/20"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" href="/servicios">
            Ver Todos los Servicios
            <BarChart3 className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;