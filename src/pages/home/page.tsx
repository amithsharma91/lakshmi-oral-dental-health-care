import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSnapshot from './components/AboutSnapshot';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySnapshot from './components/GallerySnapshot';
import CTABanner from './components/CTABanner';
import ContactStrip from './components/ContactStrip';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://lakshmioraldental.in';

const serviceAreaNeighbourhoods = [
  { '@type': 'City', name: 'Sanjaynagar', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'RT Nagar', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Hebbal', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Mathikere', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Jalahalli', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Vidyaranyapura', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'MS Nagar', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Nagashettyhalli', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Dollars Colony', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'BEL Layout', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Sadashivanagar', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Vyalikaval', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Malleswaram', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Rajajinagar', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
  { '@type': 'City', name: 'Yelahanka', containedInPlace: { '@type': 'City', name: 'Bangalore' } },
];

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Lakshmi Oral & Dental Health Care',
  url: siteUrl,
  logo: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/965f2a6631cca717cdf92ccd9b8a8e28.png',
  image: 'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/965f2a6631cca717cdf92ccd9b8a8e28.png',
  description: 'Expert dental clinic in Sanjaynagar, Bangalore offering implants, orthodontics, root canal, cosmetic dentistry and more. Open 7 days a week since 2002.',
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
  areaServed: serviceAreaNeighbourhoods,
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 13.0103,
      longitude: 77.5756,
    },
    geoRadius: '10000',
  },
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Dental Implants' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Root Canal Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Teeth Whitening' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Orthodontics & Braces' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Cosmetic Dentistry' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Tooth Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Dental Crowns & Bridges' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Pediatric Dentistry' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Gum Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Dental Cleaning & Scaling' } },
    ],
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Card',
  hasMap: 'https://maps.app.goo.gl/SFcqEofddqDkpAB69',
  sameAs: ['https://goo.gl/maps/1fma6q6XvAiTjtu88'],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${siteUrl}/#local-business`,
  name: 'Lakshmi Oral & Dental Health Care',
  description: 'Trusted dental clinic serving Sanjaynagar, RT Nagar, Hebbal, Mathikere, Malleswaram, Rajajinagar and all nearby Bangalore neighbourhoods since 2002.',
  url: siteUrl,
  telephone: '+919448178793',
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
  areaServed: serviceAreaNeighbourhoods,
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 13.0103,
      longitude: 77.5756,
    },
    geoRadius: '10000',
  },
  medicalSpecialty: 'Dentistry',
  isAcceptingNewPatients: true,
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Dental Implants', description: 'Permanent tooth replacement in Sanjaynagar Bangalore' },
    { '@type': 'MedicalProcedure', name: 'Root Canal Treatment', description: 'Painless root canal therapy near RT Nagar Bangalore' },
    { '@type': 'MedicalProcedure', name: 'Teeth Whitening', description: 'Professional teeth whitening in Bangalore' },
    { '@type': 'MedicalProcedure', name: 'Orthodontics & Braces', description: 'Braces and orthodontic treatment in Hebbal Bangalore' },
    { '@type': 'MedicalProcedure', name: 'Cosmetic Dentistry', description: 'Smile makeover services in Malleswaram Bangalore' },
    { '@type': 'MedicalProcedure', name: 'Pediatric Dentistry', description: 'Child dental care near Mathikere Bangalore' },
  ],
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
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lakshmi Oral & Dental Health Care',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-body">
      <title>Lakshmi Dental Sanjaynagar | Best Dentist Bangalore</title>
      <meta name="description" content="Lakshmi Oral &amp; Dental Health Care, Sanjaynagar Bangalore — Where Beautiful Smiles Begin. Expert dental care: implants, orthodontics, root canal, cosmetic dentistry &amp; more. Open all 7 days since 2002." />
      <meta name="keywords" content="dental clinic bangalore, dental care sanjaynagar, teeth whitening bangalore, best dentist sanjaynagar" />
      <link rel="canonical" href={`${siteUrl}/`} />
      <meta property="og:title" content="Best Dental Clinic in Sanjaynagar Bangalore | Lakshmi Oral &amp; Dental Health Care" />
      <meta property="og:description" content="Where Beautiful Smiles Begin. Expert dental care in Sanjaynagar, Bangalore — implants, orthodontics, root canal &amp; more. Open 7 days since 2002." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Dental Clinic in Sanjaynagar Bangalore | Lakshmi Oral &amp; Dental Health Care" />
      <meta name="twitter:description" content="Where Beautiful Smiles Begin. Trusted dental clinic in Sanjaynagar, Bangalore. Open 7 days." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSnapshot />
        <ServicesOverview />
        <WhyChooseUs />
        <TestimonialsSection />
        <GallerySnapshot />
        <CTABanner />
        <ContactStrip />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
