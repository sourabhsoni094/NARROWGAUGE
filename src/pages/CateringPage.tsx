import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  CheckCircle,
  Phone,
  Users,
  MapPin,
  Clock,
} from 'lucide-react';
import { NGCattersLogo } from '../components/Logos';
import { BRAND_INFO } from '../data/brandData';
import { CateringInquiry } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CateringPageProps {
  onBackToHome: () => void;
  onSuccessToast: (msg: string) => void;
}

export const CateringPage: React.FC<CateringPageProps> = ({
  onBackToHome,
  onSuccessToast,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<CateringInquiry>({
    name: '',
    phone: '',
    eventType: 'Weddings & Receptions',
    eventDate: '',
    guestCount: '150 - 300 Guests',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast(`NG Catters inquiry for ${formData.eventType} received!`);
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello NG Catters! I want to plan an event:\nName: ${formData.name || 'Client'}\nEvent: ${
        formData.eventType
      }\nDate: ${formData.eventDate || 'Upcoming'}\nGuests: ${formData.guestCount}\nVenue: ${
        formData.location || 'Sheopur/Outstation'
      }`
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
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

        {/* Minimal Catering Header */}
        <header className="pb-10 border-b border-neutral-200 dark:border-white/10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="mb-4">
                <NGCattersLogo compact={true} />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-2">
                NG Catters
              </h1>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400 max-w-xl">
                Bespoke outdoor banquet catering by Narrow Gauge. Serving grand royal weddings, intimate celebrations, and corporate galas across Madhya Pradesh.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:text-black dark:hover:bg-white transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Event Team</span>
              </button>

              <a
                href="https://www.instagram.com/ngcaterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-neutral-300 dark:border-white/10 text-xs font-mono uppercase tracking-wider hover:border-black dark:hover:border-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>@ngcaterers</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Minimal Key Stats Row */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-neutral-200/60 dark:border-white/5 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>50 to 2,000+ Guests Capacity</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sheopur & Across Madhya Pradesh</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Consultations: 10:00 AM – 9:00 PM</span>
            </span>
          </div>
        </header>

        {/* Minimal 3-Tiers Grid */}
        <section className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
            Catering Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-xl mb-2">Royal Weddings &amp; Receptions</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4">
                Grand multi-course banquets, royal North Indian gravies, Mughlai delicacies, and traditional dessert buffets designed for large gatherings.
              </p>
              <span className="text-[11px] font-mono text-neutral-400">Scale: 300 to 2,000+ Guests</span>
            </div>

            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-xl mb-2">Live Gourmet Counters</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4">
                Interactive live food stations including Chinese woks, artisanal chaats, wood-fired styled pizzas, mocktail bars, and fresh shakes.
              </p>
              <span className="text-[11px] font-mono text-neutral-400">Interactive live dining experience</span>
            </div>

            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
              <h3 className="font-serif text-xl mb-2">Private &amp; Corporate Galas</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4">
                Tailored menus for corporate banquets, anniversaries, birthdays, and family functions with courteous staff and immaculate hygiene.
              </p>
              <span className="text-[11px] font-mono text-neutral-400">Scale: 50 to 500 Guests</span>
            </div>
          </div>
        </section>

        {/* Minimal Inquiry Form */}
        <section className="border-t border-neutral-200 dark:border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Get a Quote
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-4">
                Plan Your Event with NG Catters
              </h2>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">
                Tell us about your event date, expected guest count, and cuisine preferences. Our catering managers will contact you within 24 hours.
              </p>
              <div className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <p>Phone: {BRAND_INFO.contact.phone}</p>
                <p>Base: Shivpuri Road, Sheopur, MP</p>
                <p>Instagram: @ngcaterers</p>
              </div>
            </div>

            <div className="md:col-span-7">
              {submitted ? (
                <div className="p-8 border border-emerald-500/20 bg-emerald-500/5 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <h3 className="font-serif text-xl mb-2">Inquiry Sent Successfully</h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Thank you, {formData.name}. Our banquet specialist will call you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono underline uppercase tracking-wider"
                  >
                    Submit another inquiry
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
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-white dark:bg-[#121214] text-xs focus:outline-none"
                      >
                        <option value="Weddings & Receptions">Wedding / Reception</option>
                        <option value="Engagement & Pre-wedding">Engagement</option>
                        <option value="Corporate Banquet">Corporate Event</option>
                        <option value="Birthday & Private Gathering">Private Party</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Guest Count
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-white dark:bg-[#121214] text-xs focus:outline-none"
                      >
                        <option value="50 - 150 Guests">50 - 150 Guests</option>
                        <option value="150 - 300 Guests">150 - 300 Guests</option>
                        <option value="300 - 600 Guests">300 - 600 Guests</option>
                        <option value="600 - 1000 Guests">600 - 1000 Guests</option>
                        <option value="1000+ Guests">1000+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
                      Event Location & Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Venue location (Sheopur, Shivpuri, etc.), specific cuisine preferences or questions..."
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-white/10 bg-transparent text-xs focus:outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:text-black dark:hover:bg-white transition-all cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="px-4 py-2.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider hover:bg-emerald-500/10 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
