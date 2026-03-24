import { ALL_REVIEWS } from '../../../mocks/dental';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-fill text-base ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  );
}

function GoogleGLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C6.51 42.62 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof ALL_REVIEWS[0] }) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-[#F0E8D0] hover:border-[#F4A300]/60 transition-all duration-300 flex flex-col relative overflow-hidden">
      <i className="ri-double-quotes-l text-[#8B6914]/8 text-7xl absolute top-2 left-3 leading-none pointer-events-none" />
      <div className="flex items-start justify-between mb-4 relative z-10">
        <StarRating rating={review.rating} />
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <GoogleGLogo size={18} />
        </div>
      </div>
      <p className="font-body text-gray-600 text-sm leading-relaxed mb-5 flex-1 relative z-10 italic">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="h-px bg-[#F0E8D0] mb-4" />
      <div className="flex items-center justify-between gap-3 flex-wrap relative z-10">
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs ${review.avatarColor} flex-shrink-0`}>
            {review.initial}
          </div>
          <div>
            <p className="font-heading font-bold text-gray-800 text-sm whitespace-nowrap">{review.name}</p>
            <p className="text-[#8B6914] text-xs font-body mt-0.5 flex items-center gap-1">
              <i className="ri-checkbox-circle-fill text-green-500 text-xs" />
              Verified Patient
            </p>
          </div>
        </div>
        <a
          href={review.googleLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#8B6914] border border-[#8B6914]/30 px-3 py-1.5 rounded-full hover:bg-[#8B6914] hover:text-white hover:border-[#8B6914] transition-all duration-200 cursor-pointer whitespace-nowrap"
          onClick={(e) => e.stopPropagation()}
        >
          <GoogleGLogo size={12} />
          View on Google
        </a>
      </div>
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <section className="py-20 bg-[#F0E8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F4A300] font-semibold text-sm uppercase tracking-widest font-body">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-800 mt-2 mb-4">
            Patient <span className="text-[#8B6914]">Reviews</span>
          </h2>
          <p className="text-gray-500 font-body text-base max-w-xl mx-auto">
            Don&apos;t take our word for it — hear it straight from the people whose smiles we&apos;ve transformed.
          </p>
        </div>

        {/* All reviews from central source */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {ALL_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* View More Reviews on Google CTA */}
        <div className="flex justify-center mt-4 mb-2">
          <a
            href="https://maps.app.goo.gl/XJUd1HGDnFzJ6r5Q8?g_st=ic"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2.5 bg-[#F4A300] hover:bg-[#D4900A] text-white font-heading font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap w-full sm:w-auto justify-center"
            style={{ boxShadow: '0 4px 18px rgba(244,163,0,0.28)' }}
          >
            <GoogleGLogo size={20} />
            View More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
