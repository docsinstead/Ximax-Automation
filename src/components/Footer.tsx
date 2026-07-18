// components/Footer.tsx
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Youtube
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.76.982.981-3.717-.236-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  
  // Navigation functions
  const navigateTo = (path: string) => {
    navigate(path);
  };

  // Quick Links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-company' },
    { name: 'Industry Verticals', path: '/financial' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  // Services
  const services = [
    { name: 'Big Data & Analytics', path: '/big-data-analytics' },
    { name: 'Cloud Applications', path: '/cloud-applications' },
    { name: 'Application Development', path: '/application-development' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'ERP Development', path: '/erp-development' }
  ];

  // Technologies
  const technologies = [
    { name: 'Microsoft .NET', path: '/microsoft-dotnet' },
    { name: 'Java/J2EE', path: '/java-j2ee' },
    { name: 'Enterprise Web Services', path: '/enterprise-web-services' },
    { name: 'Middleware', path: '/middleware' },
    { name: 'Oracle', path: '/oracle' }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/ximax', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/ximax', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/company/ximax-automation', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/ximax', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/ximax', label: 'YouTube' },
    { icon: <WhatsAppIcon size={20} />, url: 'https://wa.me/918095067567', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-sky-900 text-white pt-5 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* First Row - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info with Logo */}
          <div className="space-y-6">
            <div>
              {/* Logo/Image in place of title */}
              <div className="mb-2">
                <img 
                  src="/ximax-logo.jpeg" 
                  alt="Ximax Automation" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
                    e.currentTarget.alt = "Ximax Automation Logo";
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ximax Automation takes great pride in the quality and integrity of our team. We take serving our 
                customers as seriously as we do our culture of fun, creativity and professionalism. Our fantastic 
                team is anxious to work with your organization to make both yours and ours stronger.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2 ">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(link.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(service.path)}
                    className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technology */}
          <div>
            <h3 className="text-xl font-bold mb-2 pb-2">Technology</h3>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(tech.path)}
                  className="group flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors w-full text-left"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {tech.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Contact Info - Flex layout without horizontal lines */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 py-8">
          {/* Location - Flex Item */}
          <div className="flex items-center gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                Bangalore
              </p>
            </div>
          </div>

          {/* Phone - Flex Item */}
          <div className="flex items-center gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <Phone className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                <a href="tel:+9195067567" className="hover:text-sky-400 transition-colors">
                  +91 (080) 95067567
                </a>
              </p>
            </div>
          </div>

          {/* Email - Flex Item */}
          <div className="flex items-center gap-4 flex-1">
            <div className="p-2 rounded-lg bg-sky-900/30 flex-shrink-0">
              <Mail className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                <a href="mailto:info@xaimax.net" className="hover:text-sky-400 transition-colors">
                  info@xaimax.net
                </a>
              </p>
            </div>
          </div>

          {/* Social Media - Flex Item */}
          <div className="flex items-start gap-4 flex-1">
            <div>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-sky-700 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ximax Automation Private Limited. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
          >
            Back to Top
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;