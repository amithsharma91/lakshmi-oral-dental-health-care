import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import GalleryHero from './components/GalleryHero';
import PhotoGrid from './components/PhotoGrid';
import VideoGallery from './components/VideoGallery';
import GalleryCTA from './components/GalleryCTA';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://lakshmioraldental.in';

const imageGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Lakshmi Oral & Dental Health Care — Clinic Gallery',
  description: 'Before & after dental treatment photos, clinic interior, team photos and patient smile transformations at Lakshmi Oral & Dental Health Care, Sanjaynagar, Bangalore.',
  url: `${siteUrl}/gallery`,
  author: {
    '@type': 'Dentist',
    name: 'Lakshmi Oral & Dental Health Care',
    url: siteUrl,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${siteUrl}/gallery` },
  ],
};

export default function Gallery() {
  return (
    <div className="min-h-screen font-body">
      <title>Dental Gallery | Before &amp; After | Lakshmi Bangalore</title>
      <meta name="description" content="Explore our dental clinic gallery — before &amp; after dental treatment photos, clinic interior, team photos and smile transformations at Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore." />
      <meta name="keywords" content="dental clinic photos bangalore, dental before after sanjaynagar, smile transformation bangalore, dental clinic interior bangalore" />
      <link rel="canonical" href={`${siteUrl}/gallery`} />
      <meta property="og:title" content="Dental Clinic Gallery | Before &amp; After Photos | Lakshmi Dental Bangalore" />
      <meta property="og:description" content="Smile transformations, clinic interior &amp; treatment photos from Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/gallery`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dental Gallery | Lakshmi Oral &amp; Dental Bangalore" />
      <meta name="twitter:description" content="Before &amp; after dental photos and clinic gallery from Sanjaynagar, Bangalore." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <script type="application/ld+json">{JSON.stringify(imageGallerySchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <GalleryHero />
        <PhotoGrid activeFilter="All" />
        <VideoGallery />
        <GalleryCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
