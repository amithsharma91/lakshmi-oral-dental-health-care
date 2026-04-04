import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactMap from './components/ContactMap';
import QuickActions from './components/QuickActions';
import ContactFAQ from './components/ContactFAQ';
import { WHATSAPP_BOOK_URL } from '../../mocks/dental';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://lakshmioraldental.in';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Lakshmi Oral & Dental Health Care',
  url: siteUrl,
  telephone: '+919448178793',
  email: 'lakshmidentalayurveda@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#83/A, Ground Floor, 5th Main, AECS Layout',
    addressLocality: 'Sanjaynagar',
    addressRegion: 'Karnataka',
    postalCode: '560094',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0103,
    longitude: 77.5756,
  },
  hasMap: 'https://maps.app.goo.gl/SFcqEofddqDkpAB69',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:30',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '16:30',
      closes: '21:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919448178793',
    contactType: 'customer service',
    availableLanguage: ['English', 'Kannada', 'Hindi'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Lakshmi Oral & Dental Health Care located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are located at #83/A, Ground Floor, 5th Main, AECS Layout, Sanjaynagar, Bangalore – 560094.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the clinic timings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open all 7 days: Morning 9:30 AM – 2:00 PM and Evening 4:30 PM – 9:00 PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book a dental appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book an appointment by calling +91 94481 78793, via WhatsApp, or by filling out the online booking form on our contact page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept walk-in patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, walk-ins are welcome at Lakshmi Oral & Dental Health Care. However, booking in advance is recommended to avoid wait times.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
  ],
};

export default function Contact() {
  return (
    <div className="min-h-screen font-body">
      <title>Book Dental Appointment | Lakshmi Dental Bangalore</title>
      <meta name="description" content="Book a dental appointment at Lakshmi Oral &amp; Dental Health Care, #83/A 5th Main, AECS Layout, Sanjaynagar, Bangalore. Call +91 94481 78793. Open all 7 days — morning &amp; evening." />
      <meta name="keywords" content="book dental appointment bangalore, dental clinic sanjaynagar contact, dentist near sanjaynagar bangalore, dental clinic timing bangalore" />
      <link rel="canonical" href={`${siteUrl}/contact`} />
      <meta property="og:title" content="Contact &amp; Book Appointment | Lakshmi Oral &amp; Dental Health Care" />
      <meta property="og:description" content="Book your dental appointment at Sanjaynagar&apos;s trusted clinic. Open 7 days. Call +91 94481 78793." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/contact`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Book Dental Appointment | Lakshmi Dental Bangalore" />
      <meta name="twitter:description" content="Contact Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore. Open 7 days." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <ContactHero />
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <ContactInfo />

              {/* Book Appointment Card */}
              <div className="bg-[#FFF9E9] rounded-2xl border-t-4 border-[#8B6914] p-8 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#25D366]/15 mb-6">
                  <i className="ri-whatsapp-fill text-[#25D366] text-4xl" />
                </div>

                <h2 className="text-2xl font-heading font-extrabold text-gray-800 mb-2">
                  Book Your Appointment
                </h2>
                <p className="font-body text-gray-500 text-sm mb-8 max-w-xs leading-relaxed">
                  Tap the button below — WhatsApp opens with your appointment details pre-filled. Just hit send!
                </p>

                {/* Steps */}
                <div className="w-full flex flex-col gap-3 mb-8">
                  {[
                    { icon: 'ri-whatsapp-fill', color: '#25D366', bg: 'bg-green-50', text: 'Click "Book on WhatsApp" below' },
                    { icon: 'ri-edit-box-line', color: '#8B6914', bg: 'bg-[#FBF5E6]', text: 'Fill in your Name, Service & Time' },
                    { icon: 'ri-send-plane-fill', color: '#F4A300', bg: 'bg-amber-50', text: 'Send the message — we\'ll confirm!' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded-xl border border-[#F0E8D0] px-5 py-3 text-left">
                      <div className={`w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 ${step.bg}`}>
                        <i className={`${step.icon} text-lg`} style={{ color: step.color }} />
                      </div>
                      <span className="font-body text-gray-600 text-sm">{step.text}</span>
                    </div>
                  ))}
                </div>

                {/* Main CTA */}
                <a
                  href={WHATSAPP_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-600 text-white font-heading font-bold text-lg py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-2xl" />
                  </div>
                  Book on WhatsApp
                </a>

                <p className="text-gray-400 font-body text-xs mt-4">
                  <i className="ri-time-line mr-1 text-[#8B6914]" />
                  We&apos;ll confirm within 2 hours · Open 7 days
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 w-full my-6">
                  <div className="flex-1 h-px bg-[#F0E8D0]" />
                  <span className="text-gray-400 font-body text-xs">or call directly</span>
                  <div className="flex-1 h-px bg-[#F0E8D0]" />
                </div>

                <a
                  href="tel:+919448178793"
                  className="w-full flex items-center justify-center gap-2 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-semibold text-base py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-fill text-lg" />
                  </div>
                  +91 94481 78793
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactMap />
        <QuickActions />
        <ContactFAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
