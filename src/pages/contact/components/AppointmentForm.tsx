import { useState, FormEvent } from 'react';

const SERVICES = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Root Canal Treatment',
  'Tooth Replacement',
  'Orthodontics & Braces',
  'Dental Implants',
  'Oral Surgery',
  'Gum Treatment',
  'Pediatric Dentistry',
  'Advanced Dental Services',
  'Other',
];

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function AppointmentForm() {
  const [timeSlot, setTimeSlot] = useState<'morning' | 'evening'>('morning');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new URLSearchParams();
    const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      'input[name], select[name], textarea[name]'
    );

    fields.forEach((field) => {
      if (field.type === 'radio') {
        if ((field as HTMLInputElement).checked) data.append(field.name, field.value);
      } else {
        data.append(field.name, field.value);
      }
    });

    try {
      const res = await fetch('https://readdy.ai/api/form/d6taf1lm9vk3c28i5f80', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('');
        form.reset();
        setTimeSlot('morning');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-[#F0E8D0] rounded-xl px-4 py-3 text-sm font-body text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B6914] focus:ring-2 focus:ring-[#E0C970] transition-all duration-200 bg-[#F0E8D0] focus:bg-[#FFF9E9]';

  return (
    <div className="bg-[#FFF9E9] rounded-2xl border-t-4 border-[#8B6914] p-8">
      <h2 className="text-2xl font-heading font-extrabold text-gray-800 mb-1">
        Book Your Appointment
      </h2>
      <p className="text-gray-400 font-body text-sm mb-7">
        Fill in your details and we'll confirm your appointment
      </p>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-[#FBF5E6] rounded-full mb-4">
            <i className="ri-checkbox-circle-fill text-[#8B6914] text-4xl" />
          </div>
          <h3 className="font-heading font-bold text-gray-800 text-xl mb-2">Appointment Requested!</h3>
          <p className="text-gray-500 font-body text-sm max-w-xs">
            We'll call you within 2 hours to confirm your appointment. Thank you!
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-[#8B6914] font-semibold text-sm underline cursor-pointer whitespace-nowrap"
          >
            Book another appointment
          </button>
        </div>
      ) : (
        <form
          data-readdy-form
          id="appointment-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              name="full_name"
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              name="phone_number"
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="yourname@email.com"
              className={inputClass}
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
              Select Service <span className="text-red-400">*</span>
            </label>
            <select name="service" required className={inputClass}>
              <option value="">-- Choose a Service --</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Date + Time Slot row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
                Preferred Date <span className="text-red-400">*</span>
              </label>
              <input
                name="preferred_date"
                type="date"
                required
                className={inputClass}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
                Preferred Time Slot
              </label>
              <div className="flex gap-2 h-[46px] items-center">
                {[
                  { val: 'morning', label: 'Morning', sub: '9:30AM–2PM' },
                  { val: 'evening', label: 'Evening', sub: '4:30PM–9PM' },
                ].map(({ val, label, sub }) => (
                  <label
                    key={val}
                    className={`flex-1 flex flex-col items-center justify-center border-2 rounded-xl py-2 cursor-pointer transition-all duration-200 text-xs font-semibold font-body ${
                      timeSlot === val
                        ? 'border-[#8B6914] bg-[#FBF5E6] text-[#8B6914]'
                        : 'border-gray-200 text-gray-400 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="time_slot"
                      value={`${label} (${sub})`}
                      checked={timeSlot === val}
                      onChange={() => setTimeSlot(val as 'morning' | 'evening')}
                      className="hidden"
                    />
                    <span>{label}</span>
                    <span className={`text-xs font-normal ${timeSlot === val ? 'text-[#9E7A18]' : 'text-gray-300'}`}>
                      {sub}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 font-body text-xs font-semibold uppercase tracking-wider mb-1.5">
              Message / Special Requirements
            </label>
            <textarea
              name="message"
              rows={4}
              maxLength={500}
              placeholder="Any specific concern or requirement..."
              className={`${inputClass} resize-none`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="text-gray-300 text-xs text-right mt-1 font-body">{message.length}/500</p>
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-500 text-sm font-body text-center">
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#F4A300] hover:bg-[#D4900A] disabled:opacity-60 text-white font-heading font-bold text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <i className="ri-loader-4-line animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Book Appointment
                <i className="ri-arrow-right-line" />
              </>
            )}
          </button>

          <p className="text-center text-gray-400 font-body text-xs">
            <i className="ri-time-line mr-1 text-[#8B6914]" />
            We'll call you within 2 hours to confirm
          </p>
        </form>
      )}
    </div>
  );
}
