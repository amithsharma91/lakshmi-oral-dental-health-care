import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';
import TestimonialsHero from './components/TestimonialsHero';
import ReviewsGrid from './components/ReviewsGrid';
import RatingStrip from './components/RatingStrip';
import VideoTestimonials from './components/VideoTestimonials';
import GoogleReviewsCTA from './components/GoogleReviewsCTA';
import TestimonialsCTA from './components/TestimonialsCTA';

const siteUrl = import.meta.env.VITE_SITE_URL || '';

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Lakshmi Oral & Dental Health Care',
  url: siteUrl,
  telephone: '+919448178793',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#83/A, Ground Floor, 5th Main, AECS Layout',
    addressLocality: 'Sanjaynagar, Bangalore',
    postalCode: '560094',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ashok Kumar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'An exceptional dental experience at Sanjaynagar\'s finest clinic! Dr. Yogesh diagnosed my mother\'s condition with great precision and treated her with careful tooth removal and root canal treatments. Highly recommend!',
      datePublished: '2025-01-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rajesh Kumar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Completely painless — best decision of my life.',
      datePublished: '2024-12-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'I was scared but Dr. Yogesh made it so easy.',
      datePublished: '2024-11-01',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Testimonials', item: `${siteUrl}/testimonials` },
  ],
};

export default function Testimonials() {
  return (
    <div className="min-h-screen font-body">
      <title>Patient Reviews &amp; Testimonials | Lakshmi Oral &amp; Dental Health Care Bangalore</title>
      <meta name="description" content="Read real patient reviews for Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore. Verified Google reviews and video testimonials from happy dental patients. Rated 5 stars." />
      <meta name="keywords" content="dental clinic reviews bangalore, patient testimonials dentist sanjaynagar, best dentist reviews bangalore, google reviews dental bangalore" />
      <link rel="canonical" href={`${siteUrl}/testimonials`} />
      <meta property="og:title" content="Patient Reviews &amp; Testimonials | Lakshmi Oral &amp; Dental Health Care" />
      <meta property="og:description" content="Verified 5-star Google reviews from happy dental patients in Sanjaynagar, Bangalore." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/testimonials`} />
      <meta property="og:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Patient Reviews | Lakshmi Dental Bangalore" />
      <meta name="twitter:description" content="5-star patient reviews for Lakshmi Oral &amp; Dental Health Care, Sanjaynagar, Bangalore." />
      <meta name="twitter:image" content="https://storage.readdy-site.link/project_files/c4893f46-78a8-468c-a94c-da841665c127/f514314e-fbe9-4660-8626-16f1da7ad518_IMG-20260314-WA0037.jpg?v=bb49ae0b6bb8bc6a800cc6b538e43716" />
      <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <Header />
      <main>
        <TestimonialsHero />
        <ReviewsGrid />
        <RatingStrip />
        <VideoTestimonials />
        <GoogleReviewsCTA />
        <TestimonialsCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
