import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    document.title = 'Contacto - Teguilog | Solicita tu Consultoría Gratuita';
  }, []);

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@teguilog.com',
      link: 'mailto:info@teguilog.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 320 123 456',
      link: '+57320123456'
    },
    {
      icon: MapPin,
      title: 'Ubicaciones',
      content: 'Estados unidos, Colombia, Venezuela',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun-Vie: 9:00-18:00',
      link: null
    }
  ];

  const services = [
    'SEO',
    'Link Building',
    'SEO Local',
    'SEO Internacional',
    'PPC',
    'Redes Sociales',
    'Diseño Web',
    'Auditoría SEO',
    'Otro'
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.
          </p>
          <Button href="/">Volver al Inicio</Button>
        </motion.div>
      </div>
    );
  }

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
            Hablemos de tu <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Proyecto</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recibe una consultoría gratuita personalizada. Te ayudamos a identificar oportunidades 
            de crecimiento para tu negocio digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Solicita tu Consultoría Gratuita
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      {...register('name', { required: 'El nombre es requerido' })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'El email es requerido',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="+34 612 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      {...register('company')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Servicio de Interés *
                  </label>
                  <select
                    {...register('service', { required: 'Selecciona un servicio' })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    {...register('message', { required: 'El mensaje es requerido' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  icon={Send}
                >
                  Enviar Consulta
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = item.link ? (
                <a href={item.link} className="text-primary hover:text-secondary transition-colors">
                  {item.content}
                </a>
              ) : (
                <span className="text-gray-600 dark:text-gray-300">{item.content}</span>
              );

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    {content}
                  </div>
                </motion.div>
              );
            })}

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Respuesta Rápida Garantizada
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Nos comprometemos a responder todas las consultas en un máximo de 24 horas. 
                Para casos urgentes, contáctanos directamente por teléfono.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;