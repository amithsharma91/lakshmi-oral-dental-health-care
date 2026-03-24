import Header from '../../components/feature/Header';
import FloatingButtons from '../../components/feature/FloatingButtons';
import AyurvedaFooter from './components/AyurvedaFooter';
import AyurvedaHero from './components/AyurvedaHero';
import AyurvedaDoctorBio from './components/AyurvedaDoctorBio';
import ConditionsTreated from './components/ConditionsTreated';
import PanchakarmaSection from './components/PanchakarmaSection';
import BenefitsSection from './components/BenefitsSection';
import SwarnabinduSection from './components/SwarnabinduSection';
import AyurvedaContact from './components/AyurvedaContact';
import AyurvedaCTA from './components/AyurvedaCTA';

const siteUrl = import.meta.env.VITE_SITE_URL || '';

const ayurvedaClinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Lakshmi Ayurvedalya & Panchakarma Centre',
  url: `${siteUrl}/ayurvedalya`,
  description: 'Authentic Ayurvedic treatments and classical Panchakarma therapies led by Dr. Ashwini Yogesh BAMS at Sanjaynagar, Bangalore. Open 7 days.',
  telephone: '+919448178793',
  email: 'lakshmidentalayurveda@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#83/A, 1st Floor, 5th Main, AECS Layout, Post Office Road',
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
    name: 'Ayurvedic & Panchakarma Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Vamana Panchakarma' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Basti Therapy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Nasya Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Raktamokshana' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Shirodhara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Swarnabindu Prasana' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'PCOS/PCOD Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Ayurvedic Diet Counselling' } },
    ],
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Card',
};

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Ashwini Yogesh',
  jobTitle: 'Ayurveda Physician & Panchakarma Specialist',
  description: 'Dr. Ashwini Yogesh is a BAMS qualified Ayurveda physician specializing in classical Panchakarma and holistic wellness at Lakshmi Ayurvedalya, Sanjaynagar, Bangalore.',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)',
  },
  worksFor: {
    '@type': 'HealthAndBeautyBusiness',
    name: 'Lakshmi Ayurvedalya & Panchakarma Centre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#83/A, 1st Floor, 5th Main, AECS Layout',
      addressLocality: 'Sanjaynagar, Bangalore',
      postalCode: '560094',
      addressCountry: 'IN',
    },
  },
  telephone: '+919448178793',
  url: `${siteUrl}/ayurvedalya`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Panchakarma and where can I get it in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Panchakarma is a classical Ayurvedic detoxification therapy comprising five purification treatments: Vamana, Basti, Nasya, Raktamokshana, and Shirodhara. You can experience authentic Panchakarma at Lakshmi Ayurvedalya, 1st Floor, #83/A, 5th Main, AECS Layout, Sanjaynagar, Bangalore.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the Ayurveda doctor at Lakshmi Ayurvedalya Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The clinic is led by Dr. Ashwini Yogesh, a BAMS qualified Ayurveda physician and Panchakarma specialist. She provides personalized Ayurvedic treatments for holistic wellness at Sanjaynagar, Bangalore.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Swarnabindu Prasana and who is it for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swarnabindu Prasana is a classical Ayurvedic immunization administered on Pushya Nakshatra for babies and children aged 1–16 years. It boosts immunity, improves memory, aids digestion, and enhances overall child development. Available at Lakshmi Ayurvedalya, Sanjaynagar, Bangalore.',
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions does Lakshmi Ayurvedalya treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lakshmi Ayurvedalya treats 35+ conditions including diabetes, cholesterol, thyroid, obesity, PCOS/PCOD, sciatica, psoriasis, eczema, insomnia, arthritis, spondylosis, anxiety, stress, hair fall, acne, asthma, allergies, and more through authentic Ayurvedic and Panchakarma therapies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the timings of Lakshmi Ayurvedalya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lakshmi Ayurvedalya is open all 7 days: Morning 9:30 AM – 2:00 PM and Evening 4:30 PM – 9:00 PM. Located on the 1st Floor, above Lakshmi Dental Clinic, Sanjaynagar, Bangalore.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Ayurvedalya', item: `${siteUrl}/ayurvedalya` },
  ],
};

export default function AyurvedaPage() {
  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: '#F1F8E9' }}>
      <title>Ayurveda Panchakarma Sanjaynagar Bangalore | Lakshmi Ayurvedalya — Dr. Ashwini Yogesh BAMS</title>
      <meta name="description" content="Lakshmi Ayurvedalya &amp; Panchakarma Centre, Sanjaynagar Bangalore. Led by Dr. Ashwini Yogesh BAMS — Authentic Ayurvedic treatments, classical Panchakarma &amp; Swarnabindu Prasana. Open 7 days." />
      <meta name="keywords" content="ayurveda bangalore, panchakarma sanjaynagar bangalore, ayurvedic clinic bangalore, BAMS doctor bangalore, Swarnabindu Prasana bangalore" />
      <link rel="canonical" href={`${siteUrl}/ayurvedalya`} />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="13.0103;77.5756" />
      <meta property="og:title" content="Lakshmi Ayurvedalya &amp; Panchakarma Centre | Sanjaynagar Bangalore" />
      <meta property="og:description" content="Authentic Ayurvedic treatments &amp; classical Panchakarma by Dr. Ashwini Yogesh BAMS at Sanjaynagar, Bangalore. Open all 7 days." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/ayurvedalya`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Lakshmi Ayurvedalya Panchakarma | Sanjaynagar Bangalore" />
      <meta name="twitter:description" content="Authentic Ayurveda &amp; Panchakarma by Dr. Ashwini Yogesh BAMS at Sanjaynagar, Bangalore. Open 7 days." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/8634b388-87ae-4d0a-8224-be217f2c522f_20260314_181251.jpg?v=18c4970506bdd6690915aa827f801f74" />
      <script type="application/ld+json">{JSON.stringify(ayurvedaClinicSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <AyurvedaHero />
        <AyurvedaDoctorBio />
        <ConditionsTreated />
        <PanchakarmaSection />
        <BenefitsSection />
        <SwarnabinduSection />
        <AyurvedaContact />
        <AyurvedaCTA />
      </main>
      <AyurvedaFooter />
      <FloatingButtons />
    </div>
  );
}
