import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_INFO, NAV_LINKS, WHATSAPP_BOOK_URL } from '../../mocks/dental';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAyurvedaPage = location.pathname === '/ayurvedalya';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrolledBg = isAyurvedaPage ? 'bg-[#E8F5E9]' : 'bg-[#FFF9E9]';
  const logoTextColor = isScrolled
    ? isAyurvedaPage
      ? 'text-[#2E7D32]'
      : 'text-[#8B6914]'
    : 'text-white';
  const drawerBg = isAyurvedaPage ? 'bg-[#2E7D32]' : 'bg-[#8B6914]';
  const drawerBorderColor = isAyurvedaPage ? 'border-[#1B5E20]' : 'border-[#6B5210]';
  const drawerItemHover = isAyurvedaPage ? 'hover:bg-[#1B5E20]' : 'hover:bg-[#6B5210]';
  const drawerActiveColor = isAyurvedaPage ? 'bg-[#F4A300]' : 'bg-[#F4A300]';
  const hamburgerHover = isScrolled
    ? isAyurvedaPage
      ? 'text-gray-700 hover:bg-[#C8E6C9]'
      : 'text-gray-700 hover:bg-[#F0E8D0]'
    : 'text-white hover:bg-white/20';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? `${scrolledBg} shadow-md` : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer whitespace-nowrap">
              <img
                src={CLINIC_INFO.logo}
                alt="Lakshmi Dental Logo"
                className="h-12 md:h-[60px] w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(139,105,20,0.3))',
                  transform: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'rotate(5deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'none';
                }}
              />
              <div>
                <p className={`font-heading font-bold text-sm leading-tight transition-colors duration-300 ${logoTextColor}`}>
                  Lakshmi Oral &
                </p>
                <p className={`font-heading font-bold text-sm leading-tight transition-colors duration-300 ${logoTextColor}`}>
                  Dental Health Care
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isLinkAyurveda = link.path === '/ayurvedalya';
                const activeColor = isLinkAyurveda ? '#2E7D32' : '#F4A300';
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 font-body font-medium text-sm transition-all duration-200 cursor-pointer whitespace-nowrap group ${
                      isActive
                        ? isLinkAyurveda
                          ? 'text-[#2E7D32] font-bold'
                          : 'text-[#F4A300] font-bold'
                        : isScrolled
                        ? isAyurvedaPage
                          ? 'text-gray-700 hover:text-[#2E7D32]'
                          : 'text-gray-700 hover:text-[#F4A300]'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                      }`}
                      style={{ backgroundColor: activeColor }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={WHATSAPP_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap shadow-md text-white ${
                  isAyurvedaPage
                    ? 'bg-[#2E7D32] hover:bg-[#1B5E20]'
                    : 'bg-[#F4A300] hover:bg-[#D4900A]'
                }`}
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${hamburgerHover}`}
              aria-label="Toggle menu"
            >
              <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-2xl`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 ${drawerBg} shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={CLINIC_INFO.logo}
                  alt="Logo"
                  className="h-[48px] w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(139,105,20,0.3))' }}
                />
                <span className="text-white font-heading font-bold text-sm">Lakshmi Dental</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#F4A300] cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isLinkAyurveda = link.path === '/ayurvedalya';
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? isLinkAyurveda
                          ? 'bg-[#F4A300] text-white'
                          : 'bg-[#F4A300] text-white'
                        : `text-white/80 ${drawerItemHover} hover:text-white`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={WHATSAPP_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 text-white font-heading font-semibold text-center py-3 rounded-xl transition-all duration-200 cursor-pointer block ${
                  isAyurvedaPage
                    ? 'bg-[#F4A300] hover:bg-[#D4900A]'
                    : 'bg-[#F4A300] hover:bg-[#D4900A]'
                }`}
              >
                Book Appointment
              </a>
            </nav>
            <div className={`mt-8 pt-6 border-t ${drawerBorderColor}`}>
              <a
                href={`tel:+${CLINIC_INFO.phoneRaw}`}
                className="block text-white/70 hover:text-[#F4A300] text-xs font-body transition-colors duration-200 cursor-pointer"
              >
                {CLINIC_INFO.phone}
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="block text-white/70 hover:text-[#F4A300] text-xs font-body mt-1 transition-colors duration-200 cursor-pointer break-all"
              >
                {CLINIC_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
