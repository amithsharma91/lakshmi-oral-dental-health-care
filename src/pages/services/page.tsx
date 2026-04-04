import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import ServicesHero from './components/ServicesHero';
import ServicesIntroStrip from './components/ServicesIntroStrip';
import ServiceCardsGrid from './components/ServiceCardsGrid';
import WhyOurServices from './components/WhyOurServices';
import ServicesCTA from './components/ServicesCTA';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://lakshmioraldental.in';

const servicesItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dental Services at Lakshmi Oral & Dental Health Care',
  url: `${siteUrl}/services`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'General Dentistry', url: `${siteUrl}/general-dentistry` },
    { '@type': 'ListItem', position: 2, name: 'Cosmetic Dentistry', url: `${siteUrl}/cosmetic-dentistry` },
    { '@type': 'ListItem', position: 3, name: 'Root Canal Treatment', url: `${siteUrl}/root-canal-treatment` },
    { '@type': 'ListItem', position: 4, name: 'Tooth Replacement', url: `${siteUrl}/tooth-replacement` },
    { '@type': 'ListItem', position: 5, name: 'Orthodontics & Braces', url: `${siteUrl}/orthodontics-braces` },
    { '@type': 'ListItem', position: 6, name: 'Dental Implants', url: `${siteUrl}/dental-implants` },
    { '@type': 'ListItem', position: 7, name: 'Oral Surgery', url: `${siteUrl}/oral-surgery` },
    { '@type': 'ListItem', position: 8, name: 'Gum Treatment', url: `${siteUrl}/gum-treatment` },
    { '@type': 'ListItem', position: 9, name: 'Pediatric Dentistry', url: `${siteUrl}/pediatric-dentistry` },
    { '@type': 'ListItem', position: 10, name: 'Advanced Dental Services', url: `${siteUrl}/advanced-dental-services` },
  ],
};

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Lakshmi Oral & Dental Health Care',
  url: `${siteUrl}/services`,
  description: 'Comprehensive dental services in Bangalore including general dentistry, cosmetic dentistry, dental implants, root canal, orthodontics, oral surgery and more.',
  telephone: '+919448178793',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#83/A, Ground Floor, 5th Main, AECS Layout',
    addressLocality: 'Sanjaynagar, Bangalore',
    postalCode: '560094',
    addressCountry: 'IN',
  },
  medicalSpecialty: 'Dentistry',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
  ],
};

export default function Services() {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-body">
      <title>Dental Services Bangalore | Implants &amp; Root Canal</title>
      <meta name="description" content="Comprehensive dental services in Sanjaynagar, Bangalore — general dentistry, cosmetic dentistry, dental implants, root canal, orthodontics &amp; braces, oral surgery and more. Open 7 days." />
      <meta name="keywords" content="dental services bangalore, dental implants sanjaynagar, orthodontics bangalore, root canal treatment bangalore, cosmetic dentistry bangalore" />
      <link rel="canonical" href={`${siteUrl}/services`} />
      <meta property="og:title" content="Dental Services | Implants, Orthodontics, Root Canal | Lakshmi Dental Bangalore" />
      <meta property="og:description" content="10 expert dental services in Sanjaynagar, Bangalore. Implants, braces, root canal, cosmetic dentistry &amp; more. Open 7 days." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/services`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dental Services Bangalore | Lakshmi Oral &amp; Dental" />
      <meta name="twitter:description" content="Expert dental services in Sanjaynagar: implants, braces, root canal, cosmetic dentistry &amp; more." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <script type="application/ld+json">{JSON.stringify(servicesItemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <ServicesHero />
        <ServicesIntroStrip />
        <ServiceCardsGrid />
        <WhyOurServices />
        <ServicesCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
