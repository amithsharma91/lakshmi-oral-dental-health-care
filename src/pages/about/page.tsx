import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import AboutHero from './components/AboutHero';
import DoctorBio from './components/DoctorBio';
import Specializations from './components/Specializations';
import PatientCareApproach from './components/PatientCareApproach';
import ClinicPhilosophy from './components/ClinicPhilosophy';
import JourneyTimeline from './components/JourneyTimeline';
import AboutCTA from './components/AboutCTA';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const siteUrl = import.meta.env.VITE_SITE_URL || '';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Yogesh T.L.',
  jobTitle: 'Dentist & Oral Health Specialist',
  worksFor: {
    '@type': 'Dentist',
    name: 'Lakshmi Oral & Dental Health Care',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#83/A, Ground Floor, 5th Main, AECS Layout',
      addressLocality: 'Sanjaynagar, Bangalore',
      postalCode: '560094',
      addressCountry: 'IN',
    },
  },
  telephone: '+919448178793',
  email: 'lakshmidentalayurveda@gmail.com',
  description: 'Dr. Yogesh T.L. is a highly experienced dentist with over two decades of practice at Lakshmi Oral & Dental Health Care, Sanjaynagar, Bangalore since 2002.',
  url: `${siteUrl}/about`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
  ],
};

export default function About() {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-body">
      <title>About Dr. Yogesh T.L. | Expert Dentist Sanjaynagar Bangalore | Lakshmi Dental</title>
      <meta name="description" content="Meet Dr. Yogesh T.L., expert dentist with over 24 years of experience at Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore. Trusted dental specialist since 2002." />
      <meta name="keywords" content="Dr Yogesh dentist bangalore, dental specialist sanjaynagar bangalore, experienced dentist bangalore, about lakshmi dental" />
      <link rel="canonical" href={`${siteUrl}/about`} />
      <meta property="og:title" content="About Dr. Yogesh T.L. | Lakshmi Oral &amp; Dental Health Care" />
      <meta property="og:description" content="Expert dentist with 24+ years of experience in Sanjaynagar, Bangalore. Trusted dental care since 2002." />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={`${siteUrl}/about`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Dr. Yogesh T.L. | Lakshmi Dental Bangalore" />
      <meta name="twitter:description" content="24+ years of expert dental care in Sanjaynagar, Bangalore." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <AboutHero />
        <DoctorBio />
        <Specializations />
        <PatientCareApproach />
        <ClinicPhilosophy />
        <JourneyTimeline />
        <AboutCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
