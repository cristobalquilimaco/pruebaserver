import React, { useEffect } from 'react';
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
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Button from '../components/UI/Button';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Servicios - Teguilog | Marketing Digital y SEO';
  }, []);

  const services = [
    {
      icon: Search,
      title: 'SEO',
      description: 'Optimización completa para motores de búsqueda',
      features: ['Investigación de palabras clave', 'Optimización técnica', 'Contenido SEO', 'Linkbuilding'],
      color: 'from-blue-500 to-blue-600',
      href: '/servicios/seo'
    },
    {
      icon: Link,
      title: 'Link Building',
      description: 'Construcción de enlaces de alta calidad',
      features: ['Enlaces naturales', 'Guest posting', 'Relaciones públicas digitales', 'Análisis de backlinks'],
      color: 'from-green-500 to-green-600',
      href: '/servicios/link-building'
    },
    {
      icon: MapPin,
      title: 'SEO Local',
      description: 'Posicionamiento en búsquedas locales',
      features: ['Google My Business', 'Citas locales', 'Reseñas', 'Maps optimization'],
      color: 'from-purple-500 to-purple-600',
      href: '/servicios/seo-local'
    },
    {
      icon: Globe,
      title: 'SEO Internacional',
      description: 'Expansión a mercados globales',
      features: ['Hreflang', 'Estrategia multiidioma', 'Análisis de mercados', 'Localización'],
      color: 'from-orange-500 to-orange-600',
      href: '/servicios/seo-internacional'
    },
    {
      icon: Settings,
      title: 'Optimización On/Off Page',
      description: 'Mejoras técnicas y de autoridad',
      features: ['Velocidad de carga', 'Core Web Vitals', 'Arquitectura web', 'Authority building'],
      color: 'from-teal-500 to-teal-600',
      href: '/servicios/optimizacion'
    },
    {
      icon: MousePointer,
      title: 'PPC',
      description: 'Campañas publicitarias rentables',
      features: ['Google Ads', 'Facebook Ads', 'Optimización CRO', 'Remarketing'],
      color: 'from-red-500 to-red-600',
      href: '/servicios/ppc'
    }
  ];

  const benefits = [
    'Estrategias personalizadas para tu negocio',
    'Reportes detallados y transparentes',
    'Equipo certificado en Google y Facebook',
    'Soporte continuo y optimización constante',
    'ROI medible y garantizado',
    'Tecnología y herramientas de vanguardia'
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Servicios</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Soluciones integrales de marketing digital diseñadas para impulsar tu crecimiento online y maximizar tu ROI
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10"
                  href={service.href}
                >
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Por qué elegir <span className="text-primary">Teguilog</span>?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Más que una agencia, somos tu socio estratégico en el crecimiento digital. 
                Combinamos experiencia, tecnología y pasión por los resultados.
              </p>
              <Button size="lg" href="/contacto">
                Comenzar Proyecto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy y recibe una consultoría gratuita personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              href="/contacto"
            >
              Solicitar Consultoría Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
              href="/casos-exito"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;