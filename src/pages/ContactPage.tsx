import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Star,
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenReserve?: (experience?: 'restaurant' | 'catering' | 'cafe') => void;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onSuccessToast,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'restaurant',
    date: '',
    guests: '2-4 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const cleanPhone = BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '');

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Narrow Gauge! I want to inquire about ${formData.service}:\nName: ${formData.name || 'Client'}\nDate: ${
        formData.date || 'Today'
      }\nGuests: ${formData.guests}`
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast('Message received! Our team will contact you shortly.');
      }
    }, 500);
  };

  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-200 ${
        isDark ? 'bg-[#0A0A0B] text-[#EDEDED]' : 'bg-[#FAF9F6] text-[#171717]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Minimal Header */}
        <header className="pb-10 border-b border-neutral-200 dark:border-white/10 mb-12">
          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-3">
            Contact &amp; Reservations
          </h1>
          <p className="text-sm sm:text-base font-light text-neutral-600 dark:text-neutral-400 max-w-xl">
            Visit us in Sheopur, call directly for table bookings, or connect with our banquet team for event catering inquiries.
          </p>
        </header>

        {/* 2-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <p className="text-base font-medium mb-1">
                Opposite Badminton Court
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                Shivpuri Road, Sheopur, Madhya Pradesh
              </p>
              <a
                href={BRAND_INFO.contact.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider underline hover:opacity-75 inline-flex items-center gap-1"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="border-t border-neutral-200/60 dark:border-white/5 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                <Clock className="w-4 h-4" />
                <span>Hours</span>
              </div>
              <p className="text-base font-medium mb-1">11:00 AM – 10:45 PM</p>
              <p className="text-xs text-neutral-500 mb-2">Open Daily (Monday – Sunday)</p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.1 Rating (364 Reviews)</span>
              </div>
            </div>

            <div className="border-t border-neutral-200/60 dark:border-white/5 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                <Phone className="w-4 h-4" />
                <span>Direct Contact</span>
              </div>
              <p className="text-base font-mono font-medium mb-1">
                <a href={`tel:${cleanPhone}`} className="hover:underline">
                  {BRAND_INFO.contact.phone}
                </a>
              </p>
              <div className="mt-2">
                <button
                  onClick={openWhatsApp}
                  className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="border-t border-neutral-200/60 dark:border-white/5 pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                Official Instagram
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <a
                    href="https://www.instagram.com/narrowgaugeofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-neutral-700 dark:text-neutral-300 flex items-center justify-between"
                  >
                    <span>Restaurant: @narrowgaugeofficial</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/ngcaterers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-neutral-700 dark:text-neutral-300 flex items-center justify-between"
                  >
                    <span>Catering: @ngcaterers</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/cafeuknow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-neutral-700 dark:text-neutral-300 flex items-center justify-between"
                  >
                    <span>Café: @cafeuknow</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-white/10 pt-8 md:pt-0 md:pl-12">
            <h2 className="font-serif text-2xl font-normal mb-2">
              Book a Table or Message Host
            </h2>
            <p className="text-xs text-neutral-500 font-light mb-6">
              Fill in your details below and we will confirm your table or booking immediately.
            </p>

            {submitted ? (
              <div className="p-8 border border-emerald-500/20 bg-emerald-500/5 text-center">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-serif text-xl mb-2">Request Received</h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Thank you, {formData.name}. Our hospitality desk has received your request.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ankit Verma"
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-white dark:bg-[#121214] text-xs focus:outline-none"
                    >
                      <option value="restaurant">Restaurant Dining</option>
                      <option value="cafe">Uknow Café</option>
                      <option value="catering">NG Catters Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-white dark:bg-[#121214] text-xs focus:outline-none"
                    >
                      <option value="1-2 Guests">1 - 2 Guests</option>
                      <option value="3-5 Guests">3 - 5 Guests</option>
                      <option value="6-10 Guests">6 - 10 Guests</option>
                      <option value="Large Group (10+)">Large Group (10+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                    Special Requests or Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Seating preferences, dietary requests, or specific queries..."
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:text-black dark:hover:bg-white transition-all cursor-pointer"
                  >
                    {submitting ? 'Sending...' : 'Confirm Request'}
                  </button>
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="px-4 py-2.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider hover:bg-emerald-500/10 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Minimal Map Embed */}
        <section className="border-t border-neutral-200 dark:border-white/10 pt-10">
          <div className="h-72 w-full overflow-hidden border border-neutral-200 dark:border-white/10">
            <iframe
              src={BRAND_INFO.contact.googleMapsEmbedUrl}
              title="Narrow Gauge Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
