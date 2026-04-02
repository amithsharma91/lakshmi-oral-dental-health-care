import { Link } from 'react-router-dom';
import { CLINIC_INFO, NAV_LINKS, WHATSAPP_BOOK_URL } from '../../mocks/dental';

const FOOTER_SERVICES = [
  { label: 'General Dentistry', path: '/services' },
  { label: 'Cosmetic Dentistry', path: '/services' },
  { label: 'Dental Implants', path: '/services' },
  { label: 'Root Canal Treatment', path: '/services' },
  { label: 'Orthodontics & Braces', path: '/services' },
  { label: 'View All Services →', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-[#8B6914] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start mb-4">
              <img
                src={CLINIC_INFO.logo}
                alt="Lakshmi Dental Logo"
                className="h-20 w-auto object-contain mb-3"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(139,105,20,0.4))', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'rotate(5deg) scale(1.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'none'; }}
              />
              <div>
                <p className="font-heading font-bold text-base leading-tight text-white">Lakshmi Oral &amp; Dental Health Care</p>
                <p className="font-body text-xs text-amber-200 mt-0.5">Practicing Since 2002 · Bangalore</p>
              </div>
            </div>
            <p className="text-amber-100 font-body text-sm italic mb-5 max-w-xs">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>
            <p className="text-white/70 font-body text-xs mb-4 max-w-xs leading-relaxed">
              Serving Bangalore since 2002 — trusted by 5000+ patients for comprehensive, compassionate dental care.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: 'ri-instagram-line',
                  href: 'https://www.instagram.com/dr.yogeshtl?utm_source=qr&igsh=MTJvM2s2eXZja2JrYg==',
                  label: 'Instagram',
                },
                {
                  icon: 'ri-facebook-fill',
                  href: 'https://www.facebook.com/share/1AegdPVqpx/',
                  label: 'Facebook',
                },
                {
                  icon: 'ri-threads-line',
                  href: 'https://www.threads.com/@dr.yogeshtl?utm_source=wa4a&utm_campaign=wa_th_web_link_ts_ni',
                  label: 'Threads',
                },
                {
                  icon: 'ri-whatsapp-line',
                  href: WHATSAPP_BOOK_URL,
                  label: 'WhatsApp',
                },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6B5210] hover:bg-[#F4A300] transition-colors duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">
              <a id="quick-links">Quick Links</a>
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-amber-100 hover:text-[#F4A300] font-body text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <i className="ri-arrow-right-s-line text-[#F4A300] flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-calendar-check-line" />
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">
              <a id="footer-services">Our Services</a>
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((svc) => (
                <li key={svc.label}>
                  <Link
                    to={svc.path}
                    className="text-amber-100 hover:text-[#F4A300] font-body text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <i className="ri-stethoscope-line text-[#F4A300] flex-shrink-0 text-xs" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">
              <a id="contact-info">Contact Us</a>
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#6B5210] flex-shrink-0 mt-0.5">
                  <i className="ri-phone-line text-[#F4A300] text-xs" />
                </div>
                <a
                  href={`tel:+${CLINIC_INFO.phoneRaw}`}
                  className="text-amber-100 hover:text-[#F4A300] font-body text-sm transition-colors duration-200 cursor-pointer"
                >
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#6B5210] flex-shrink-0 mt-0.5">
                  <i className="ri-mail-line text-[#F4A300] text-xs" />
                </div>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-amber-100 hover:text-[#F4A300] font-body text-xs transition-colors duration-200 cursor-pointer break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#6B5210] flex-shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-[#F4A300] text-xs" />
                </div>
                <div>
                  <p className="text-amber-100 font-body text-xs leading-relaxed">
                    {CLINIC_INFO.address},<br />{CLINIC_INFO.city}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/SFcqEofddqDkpAB69"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 mt-1.5 text-[#F4A300] hover:text-amber-200 font-heading font-semibold text-xs transition-colors duration-200 cursor-pointer"
                  >
                    Get Directions
                    <i className="ri-arrow-right-s-line" />
                  </a>
                </div>
              </li>
            </ul>

            {/* Hours compact */}
            <h4 className="font-heading font-bold text-sm mb-3 text-white">Clinic Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-[#6B5210] rounded-lg px-3 py-2">
                <i className="ri-sun-line text-[#F4A300] text-sm flex-shrink-0" />
                <div>
                  <p className="text-white font-heading font-semibold text-xs">Morning</p>
                  <p className="text-amber-200 font-body text-xs">{CLINIC_INFO.hoursAM}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#6B5210] rounded-lg px-3 py-2">
                <i className="ri-moon-line text-[#F4A300] text-sm flex-shrink-0" />
                <div>
                  <p className="text-white font-heading font-semibold text-xs">Evening</p>
                  <p className="text-amber-200 font-body text-xs">{CLINIC_INFO.hoursPM}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#F4A300]/20 rounded-lg px-3 py-2">
                <i className="ri-calendar-check-line text-[#F4A300] text-sm flex-shrink-0" />
                <span className="text-amber-200 font-heading font-semibold text-xs">{CLINIC_INFO.days}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#6B5210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/70 font-body text-sm text-center sm:text-left">
            &copy; 2002&ndash;2025 Lakshmi Oral &amp; Dental Health Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+${CLINIC_INFO.phoneRaw}`}
              className="text-white/70 hover:text-[#F4A300] font-body text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <i className="ri-phone-line" />
              {CLINIC_INFO.phone}
            </a>
            <span className="text-[#6B5210]">|</span>
            <p className="text-white/70 font-body text-xs italic">
              Where Beautiful Smiles Begin.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
