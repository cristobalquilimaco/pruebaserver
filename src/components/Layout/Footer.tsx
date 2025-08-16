import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Servicios',
      links: [
        { name: 'SEO', href: '/servicios/seo' },
        { name: 'Link Building', href: '/servicios/link-building' },
        { name: 'PPC', href: '/servicios/ppc' },
        { name: 'Diseño Web', href: '/servicios/diseno-web' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
        { name: 'Casos de Éxito', href: '/casos-exito' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/privacidad' },
        { name: 'Términos de Servicio', href: '/terminos' },
        { name: 'Cookies', href: '/cookies' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-dark dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Teguilog</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Agencia especializada en marketing digital, SEO y automatizaciones. 
              Impulsamos tu presencia online con estrategias efectivas y resultados medibles.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@teguilog.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Teguilog. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;