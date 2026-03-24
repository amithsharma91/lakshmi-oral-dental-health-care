import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    id: 1,
    question: 'Do I need an appointment or can I walk in?',
    answer:
      'Both! Walk-ins are always welcome at Lakshmi Oral & Dental Health Care. However, booking in advance ensures minimal waiting time and your preferred time slot.',
  },
  {
    id: 2,
    question: 'What are your clinic hours?',
    answer:
      'We are open Morning 9:30 AM – 2:00 PM and Evening 4:30 PM – 9:00 PM, all 7 days a week including Sundays and most public holidays.',
  },
  {
    id: 3,
    question: 'Do you treat children?',
    answer:
      'Yes! We have a dedicated Pediatric Dentistry department specifically designed to make kids feel comfortable and safe. Our team is trained to handle children with patience and care.',
  },
  {
    id: 4,
    question: 'Is parking available near the clinic?',
    answer:
      'Yes, parking is conveniently available near our clinic at AECS Layout, Sanjaynagar. Street parking is accessible on the 5th Main road near Post Office Road.',
  },
  {
    id: 5,
    question: 'Do you accept dental insurance?',
    answer:
      'Please call us at +91 94481 78793 to check whether your specific insurance plan is accepted. We are happy to assist you with any queries about coverage and billing.',
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#FFF9E9] rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        open ? 'border-[#8B6914]' : 'border-[#F0E8D0] hover:border-[#ddd3b8]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-colors duration-200 ${
              open ? 'bg-[#8B6914]' : 'bg-[#FBF5E6]'
            }`}
          >
            <i
              className={`ri-question-line text-sm transition-colors duration-200 ${
                open ? 'text-white' : 'text-[#8B6914]'
              }`}
            />
          </div>
          <span className="font-heading font-bold text-gray-800 text-sm">{faq.question}</span>
        </div>
        <div
          className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
            open ? 'bg-[#8B6914] rotate-180' : 'bg-gray-100'
          }`}
        >
          <i
            className={`ri-arrow-down-s-line text-sm transition-colors duration-200 ${
              open ? 'text-white' : 'text-gray-400'
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pl-[3.75rem]">
          <p className="text-gray-500 font-body text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <section className="py-20 bg-[#F0E8D0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#F4A300] font-semibold text-sm uppercase tracking-widest font-body">
            Got Questions?
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-gray-800 mt-2 mb-3">
            Frequently Asked <span className="text-[#8B6914]">Questions</span>
          </h2>
          <p className="text-gray-400 font-body text-sm">
            Quick answers to the most common questions we receive
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-[#FBF5E6] border-2 border-[#8B6914] rounded-2xl px-6 py-6">
          <p className="text-gray-700 font-body text-sm mb-3">
            Still have questions? We're just a call away.
          </p>
          <a
            href="tel:+919448178793"
            className="inline-flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5210] text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill" />
            +91 94481 78793
          </a>
        </div>
      </div>
    </section>
  );
}
