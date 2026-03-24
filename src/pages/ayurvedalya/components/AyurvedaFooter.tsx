import { Link } from 'react-router-dom';
import { CLINIC_INFO, NAV_LINKS } from '../../../mocks/dental';

const AYURVEDA_SERVICES = [
  'Panchakarma Therapy',
  'Vamana',
  'Basti',
  'Nasya',
  'Raktamokshana',
  'Shirodhara',
  'Swarnabindu Prasana',
];

export default function AyurvedaFooter() {
  return (
    <footer style={{ backgroundColor: '#1B5E20' }} className="text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-4">
              <img
                src={CLINIC_INFO.logo}
                alt="Lakshmi Ayurvedalya Logo"
                className="h-16 w-auto object-contain mb-3"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(46,125,50,0.4))' }}
              />
              <div>
                <p className="font-heading font-bold text-base leading-tight text-white">Lakshmi Ayurvedalya</p>
                <p className="font-heading font-bold text-sm leading-tight text-white">&amp; Panchakarma Centre</p>
                <p className="font-body text-xs mt-1" style={{ color: '#A5D6A7' }}>Ancient Healing, Modern Wellness</p>
              </div>
            </div>
            <p className="font-body text-sm italic mb-4 max-w-xs leading-relaxed" style={{ color: '#C8E6C9' }}>
              &ldquo;Authentic Ayurvedic treatments &amp; classical Panchakarma therapies by Dr. Ashwini Yogesh, BAMS.&rdquo;
            </p>
            {/* Badge */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-semibold"
              style={{ backgroundColor: '#F4A300', color: '#fff' }}
            >
              <i className="ri-map-pin-line text-xs" />
              Now Open · 1st Floor, Sanjaynagar
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                    style={{ color: '#A5D6A7' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#A5D6A7')}
                  >
                    <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: '#F4A300' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayurveda Services */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Ayurveda Services</h4>
            <ul className="space-y-2.5">
              {AYURVEDA_SERVICES.map((svc) => (
                <li key={svc}>
                  <Link
                    to="/ayurvedalya"
                    className="font-body text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                    style={{ color: '#A5D6A7' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#A5D6A7')}
                  >
                    <i className="ri-leaf-line flex-shrink-0 text-xs" style={{ color: '#F4A300' }} />
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Visit Us</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2E7D32' }}>
                  <i className="ri-map-pin-line text-xs" style={{ color: '#F4A300' }} />
                </div>
                <div>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#C8E6C9' }}>
                    1st Floor, #83/A, 5th Main,<br />
                    AECS Layout, Sanjaynagar,<br />
                    Bangalore – 560094<br />
                    <span className="italic" style={{ color: '#A5D6A7' }}>(Above Lakshmi Dental Clinic)</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2E7D32' }}>
                  <i className="ri-phone-line text-xs" style={{ color: '#F4A300' }} />
                </div>
                <a
                  href="tel:+919448178793"
                  className="font-body text-sm transition-colors duration-200 cursor-pointer"
                  style={{ color: '#C8E6C9' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C8E6C9')}
                >
                  +91 94481 78793
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: '#2E7D32' }}>
                  <i className="ri-mail-line text-xs" style={{ color: '#F4A300' }} />
                </div>
                <a
                  href="mailto:lakshmidentalayurveda@gmail.com"
                  className="font-body text-xs transition-colors duration-200 cursor-pointer break-all"
                  style={{ color: '#C8E6C9' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C8E6C9')}
                >
                  lakshmidentalayurveda@gmail.com
                </a>
              </li>
            </ul>

            {/* Hours */}
            <h4 className="font-heading font-bold text-sm mb-3 text-white">Clinic Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: '#2E7D32' }}>
                <i className="ri-sun-line text-sm flex-shrink-0" style={{ color: '#F4A300' }} />
                <div>
                  <p className="text-white font-heading font-semibold text-xs">Morning</p>
                  <p className="font-body text-xs" style={{ color: '#C8E6C9' }}>9:30 AM – 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: '#2E7D32' }}>
                <i className="ri-moon-line text-sm flex-shrink-0" style={{ color: '#F4A300' }} />
                <div>
                  <p className="text-white font-heading font-semibold text-xs">Evening</p>
                  <p className="font-body text-xs" style={{ color: '#C8E6C9' }}>4:30 PM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: 'rgba(244,163,0,0.2)' }}>
                <i className="ri-calendar-check-line text-sm flex-shrink-0" style={{ color: '#F4A300' }} />
                <span className="font-heading font-semibold text-xs" style={{ color: '#C8E6C9' }}>Open All 7 Days</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #2E7D32' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.6)' }}>
            &copy; 2002&ndash;2025 Lakshmi Ayurvedalya &amp; Panchakarma Centre &middot; Sanjaynagar, Bangalore
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/ayurvedalya"
              className="font-body text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <i className="ri-leaf-line" />
              Ayurvedalya
            </Link>
            <span style={{ color: '#2E7D32' }}>|</span>
            <Link
              to="/"
              className="font-body text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F4A300')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <i className="ri-hospital-line" />
              Dental Clinic
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
