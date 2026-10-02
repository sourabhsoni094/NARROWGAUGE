import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Send,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Compass,
  Star,
  Users,
} from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { BRAND_INFO } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenReserve: (experience?: 'restaurant' | 'catering' | 'cafe') => void;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onOpenReserve,
  onSuccessToast,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'restaurant',
    date: '',
    guests: '2-4',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const cleanPhone = BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '');

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Narrow Gauge team! I would like to inquire about ${formData.service || 'your services'}.`
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
        onSuccessToast('Thank you! Your message has been received. Our team will contact you shortly.');
      }
    }, 600);
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#0B0B0B] text-[#F5F2EA]' : 'bg-[#FAF7F2] text-[#141210]'
    }`}>
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <button
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase transition-colors group cursor-pointer ${
            isDark ? 'text-accent-champagne hover:text-white' : 'text-[#8C571E] hover:text-[#5C350D]'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-mono uppercase tracking-[0.2em] mb-4 ${
            isDark
              ? 'border-accent-champagne/40 bg-accent-champagne/10 text-accent-champagne'
              : 'border-[#D4C3A3] bg-[#EFE8DC] text-[#7A4B13]'
          }`}>
            <Sparkles className="w-3 h-3" />
            <span>Connect & Visit</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-6">
            Contact <span className="italic">Narrow Gauge</span>
          </h1>

          <p className={`text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-[#9B9B9B]' : 'text-[#4A443C]'
          }`}>
            Whether reserving a table for family dinner, planning wedding catering with NG Catters, or stopping by Uknow Café for evening shakes — our hospitality team is here to assist.
          </p>
        </div>
      </section>

      {/* Quick Action Badges */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href={`tel:${cleanPhone}`}
            className={`p-6 border transition-all text-center flex flex-col items-center justify-center group ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-accent-champagne/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#8C571E] shadow-sm'
            }`}
          >
            <Phone className={`w-5 h-5 mb-2 group-hover:scale-110 transition-transform ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`} />
            <span className="text-xs font-mono uppercase tracking-wider block mb-1">Call Directly</span>
            <span className={`text-xs ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>{BRAND_INFO.contact.phone}</span>
          </a>

          <button
            onClick={openWhatsApp}
            className={`p-6 border transition-all text-center flex flex-col items-center justify-center group cursor-pointer ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-[#25D366]/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#25D366] shadow-sm'
            }`}
          >
            <MessageSquare className="w-5 h-5 mb-2 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono uppercase tracking-wider block mb-1">WhatsApp</span>
            <span className={`text-xs ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>Instant Chat</span>
          </button>

          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 border transition-all text-center flex flex-col items-center justify-center group ${
              isDark
                ? 'bg-[#141414] border-white/[0.08] hover:border-accent-champagne/40'
                : 'bg-white border-[#E2D9CC] hover:border-[#8C571E] shadow-sm'
            }`}
          >
            <Compass className={`w-5 h-5 mb-2 group-hover:scale-110 transition-transform ${
              isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
            }`} />
            <span className="text-xs font-mono uppercase tracking-wider block mb-1">Get Directions</span>
            <span className={`text-xs ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>Google Maps Navigation</span>
          </a>

          <button
            onClick={() => onOpenReserve('restaurant')}
            className={`p-6 border transition-all text-center flex flex-col items-center justify-center group cursor-pointer ${
              isDark
                ? 'bg-accent-champagne/10 border-accent-champagne/30 hover:bg-accent-champagne hover:text-[#0B0B0B]'
                : 'bg-[#8C571E]/10 border-[#8C571E]/30 hover:bg-[#8C571E] hover:text-white shadow-sm'
            }`}
          >
            <Users className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-accent-champagne" />
            <span className="text-xs font-mono uppercase tracking-wider block mb-1 font-semibold">Reserve Table</span>
            <span className="text-xs opacity-80">Online Booking</span>
          </button>
        </div>
      </section>

      {/* Main Grid: Form on Left + Information & Map on Right */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 border ${
              isDark ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#E2D9CC] shadow-md'
            }`}>
              <h2 className="font-serif text-2xl sm:text-3xl mb-2">Send Us a Direct Message</h2>
              <p className={`text-xs font-light mb-8 ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                Fill in your details below and our manager will reply within 30 minutes during service hours.
              </p>

              {submitted ? (
                <div className={`p-8 border text-center space-y-4 ${
                  isDark ? 'bg-white/[0.02] border-white/[0.1]' : 'bg-[#FAF7F2] border-[#D4C3A3]'
                }`}>
                  <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h3 className="font-serif text-2xl">Message Received</h3>
                  <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                    Thank you, <strong className={isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}>{formData.name}</strong>. We have received your inquiry for <span className="capitalize font-mono">{formData.service}</span> and will reach out to you at <strong className={isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'restaurant',
                        date: '',
                        guests: '2-4',
                        message: '',
                      });
                    }}
                    className={`mt-4 px-6 py-2 text-xs font-mono uppercase tracking-wider border cursor-pointer ${
                      isDark
                        ? 'border-white/20 text-[#F5F2EA] hover:bg-white/10'
                        : 'border-[#8C571E] text-[#8C571E] hover:bg-[#8C571E] hover:text-white'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}>
                      Which Service Are You Interested In? *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'restaurant', label: 'Restaurant' },
                        { id: 'catering', label: 'NG Catters' },
                        { id: 'cafe', label: 'Uknow Café' },
                      ].map((svc) => (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: svc.id })}
                          className={`py-3 px-2 text-xs font-mono uppercase tracking-wider text-center border transition-all cursor-pointer ${
                            formData.service === svc.id
                              ? isDark
                                ? 'bg-accent-champagne/15 border-accent-champagne text-accent-champagne font-semibold'
                                : 'bg-[#8C571E] border-[#8C571E] text-white font-semibold shadow-sm'
                              : isDark
                              ? 'bg-transparent border-white/[0.08] text-[#9B9B9B] hover:text-white'
                              : 'bg-stone-50 border-[#E2D9CC] text-[#5C564D] hover:text-[#141210]'
                          }`}
                        >
                          {svc.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                        isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                      }`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 text-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#181818] border-white/[0.1] text-white focus:border-accent-champagne'
                            : 'bg-white border-[#D4C3A3] text-[#141210] focus:border-[#8C571E]'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                        isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                      }`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 text-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#181818] border-white/[0.1] text-white focus:border-accent-champagne'
                            : 'bg-white border-[#D4C3A3] text-[#141210] focus:border-[#8C571E]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                        isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                      }`}>
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-4 py-3 text-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#181818] border-white/[0.1] text-white focus:border-accent-champagne'
                            : 'bg-white border-[#D4C3A3] text-[#141210] focus:border-[#8C571E]'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                        isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                      }`}>
                        Preferred Date / Occasion
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-4 py-3 text-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#181818] border-white/[0.1] text-white focus:border-accent-champagne'
                            : 'bg-white border-[#D4C3A3] text-[#141210] focus:border-[#8C571E]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}>
                      Message or Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you have in mind (guest count, menu preferences, special setups)..."
                      className={`w-full px-4 py-3 text-sm border focus:outline-none transition-colors resize-none ${
                        isDark
                          ? 'bg-[#181818] border-white/[0.1] text-white focus:border-accent-champagne'
                          : 'bg-white border-[#D4C3A3] text-[#141210] focus:border-[#8C571E]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-4 text-xs font-mono uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all cursor-pointer ${
                      isDark
                        ? 'bg-accent-champagne text-[#0B0B0B] hover:bg-white font-medium'
                        : 'bg-[#8C571E] text-white hover:bg-[#734415] font-semibold shadow-md'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting Inquiry...' : 'Send Inquiry to Narrow Gauge'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Details & Location on Right */}
          <div className="lg:col-span-5 space-y-6">
            {/* Verified Address Card */}
            <div className={`p-8 border ${
              isDark ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#E2D9CC] shadow-sm'
            }`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-none ${
                  isDark ? 'bg-accent-champagne/10 text-accent-champagne' : 'bg-[#8C571E]/10 text-[#8C571E]'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.2em] block mb-1 ${
                    isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                  }`}>
                    Physical Destination
                  </span>
                  <h3 className="font-serif text-xl mb-1">Narrow Gauge Sheopur</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                    {BRAND_INFO.contact.landmark}, {BRAND_INFO.contact.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className={`pt-6 border-t flex items-start gap-4 mb-6 ${
                isDark ? 'border-white/[0.08]' : 'border-[#E2D9CC]'
              }`}>
                <div className={`p-3 rounded-none ${
                  isDark ? 'bg-accent-champagne/10 text-accent-champagne' : 'bg-[#8C571E]/10 text-[#8C571E]'
                }`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.2em] block mb-1 ${
                    isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                  }`}>
                    Service Hours
                  </span>
                  <h4 className="font-serif text-base mb-1">{BRAND_INFO.hours.display}</h4>
                  <p className={`text-xs ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                    Kitchen and dining open 7 days a week including public holidays.
                  </p>
                </div>
              </div>

              {/* Google Reviews Badge */}
              <div className={`p-4 border flex items-center justify-between ${
                isDark ? 'bg-[#181818] border-white/[0.08]' : 'bg-[#FAF7F2] border-[#E2D9CC]'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-accent-champagne">
                    {BRAND_INFO.rating.score} / 5.0
                  </span>
                </div>
                <span className={`text-xs font-mono ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  {BRAND_INFO.rating.reviewCount} Reviews
                </span>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className={`border overflow-hidden ${
              isDark ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#E2D9CC] shadow-sm'
            }`}>
              <div className="p-4 border-b flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider">Map & Coordinates</span>
                <a
                  href={BRAND_INFO.contact.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-mono uppercase tracking-wider flex items-center gap-1 ${
                    isDark ? 'text-accent-champagne hover:underline' : 'text-[#8C571E] hover:underline'
                  }`}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-64 bg-stone-900 relative">
                <iframe
                  title="Narrow Gauge Location Sheopur"
                  src={BRAND_INFO.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Instagram Handles Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className={`p-8 sm:p-12 border ${
          isDark ? 'bg-[#121212] border-white/[0.08]' : 'bg-white border-[#E2D9CC] shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] mb-2 text-[#E1306C]">
                <InstagramIcon className="w-4 h-4" />
                <span>Social Channels</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl">Follow Us on Instagram</h2>
            </div>
            <p className={`text-xs max-w-md ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
              Stay updated with daily culinary specials, live wedding catering showcases, and vibrant café moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Restaurant */}
            <a
              href="https://www.instagram.com/narrowgaugeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 border transition-all flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#161616] border-white/[0.08] hover:border-[#E1306C]/50'
                  : 'bg-[#FAF7F2] border-[#E2D9CC] hover:border-[#E1306C] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-[#D99B59]">Dining</span>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-[#E1306C] transition-colors">
                  Narrow Gauge Restaurant
                </h3>
                <span className="text-xs font-mono text-accent-champagne block mb-3">
                  @narrowgaugeofficial
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Daily dining delights, sizzling platters, North Indian recipes & guest smiles.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#E1306C]">
                <span>View Instagram Profile</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* NG Catters */}
            <a
              href="https://www.instagram.com/ngcaterers/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 border transition-all flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#161616] border-white/[0.08] hover:border-[#E1306C]/50'
                  : 'bg-[#FAF7F2] border-[#E2D9CC] hover:border-[#E1306C] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-accent-gold">Catering</span>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-[#E1306C] transition-colors">
                  NG Catters
                </h3>
                <span className="text-xs font-mono text-accent-gold block mb-3">
                  @ngcaterers
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Royal wedding buffets, grand catering setups & celebration highlights across MP.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#E1306C]">
                <span>View Instagram Profile</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Uknow Café */}
            <a
              href="https://www.instagram.com/cafeuknow/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 border transition-all flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#161616] border-white/[0.08] hover:border-[#E1306C]/50'
                  : 'bg-[#FAF7F2] border-[#E2D9CC] hover:border-[#E1306C] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-[#C89666]">Café</span>
                </div>
                <h3 className="font-serif text-xl mb-1 group-hover:text-[#E1306C] transition-colors">
                  Uknow Café
                </h3>
                <span className="text-xs font-mono text-[#C89666] block mb-3">
                  @cafeuknow
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'}`}>
                  Handcrafted shakes, iced cold brew coffees, acoustic café vibes & good times.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#E1306C]">
                <span>View Instagram Profile</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
