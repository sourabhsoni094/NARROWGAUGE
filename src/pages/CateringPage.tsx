import React, { useState } from 'react';
import {
  HeartHandshake,
  Cake,
  Briefcase,
  Wine,
  Users,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
} from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { NGCattersLogo } from '../components/Logos';
import { RatingBadge } from '../components/RatingBadge';
import { CATERING_SERVICES, CATERING_PROCESS, BRAND_INFO } from '../data/brandData';
import { CateringInquiry } from '../types';

interface CateringPageProps {
  onBackToHome: () => void;
  onSuccessToast: (msg: string) => void;
}

export const CateringPage: React.FC<CateringPageProps> = ({
  onBackToHome,
  onSuccessToast,
}) => {
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
    }, 700);
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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Cake':
        return <Cake className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Wine':
        return <Wine className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EA] pt-24 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9B9B9B] hover:text-accent-gold transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Experiences</span>
        </button>
      </div>

      {/* Hero Banner with NG Catters Logo */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="relative border border-white/[0.1] bg-[#121212] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <NGCattersLogo className="scale-105 origin-left" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-4">
                NG Catters
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-accent-gold font-light mb-6">
                “We bring the experience to you.”
              </p>

              <p className="text-sm sm:text-base text-[#9B9B9B] font-light leading-relaxed max-w-xl mb-8">
                From grand wedding buffets and corporate banquets to festive gatherings and private anniversaries, NG Catters elevates your occasion with thoughtful menus, attentive service, and exquisite presentation.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#catering-proposal"
                  className="px-6 py-3.5 bg-accent-gold text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#e6bf4b] transition-all flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Custom Proposal</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 border border-white/[0.15] hover:border-green-400 text-[#F5F2EA] hover:text-green-400 text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-green-400" />
                  <span>WhatsApp Event Desk</span>
                </button>

                <a
                  href="https://www.instagram.com/ngcaterers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 border border-white/[0.15] hover:border-accent-gold text-[#F5F2EA] hover:text-accent-gold text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-accent-gold group-hover:scale-110 transition-transform" />
                  <span>@ngcaterers</span>
                </a>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="lg:col-span-5 bg-[#161616] border border-white/[0.08] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold">
                  Catering Division
                </span>
                <span className="text-xs font-mono text-[#9B9B9B]">Narrow Gauge Brand</span>
              </div>

              <div className="space-y-4 text-xs font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Headquarters</strong>
                    <a
                      href={BRAND_INFO.contact.googleMapsDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9B9B9B] hover:text-accent-gold underline decoration-white/20 transition-colors block"
                    >
                      Opposite Badminton Court, Shivpuri Road, Sheopur, MP ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Consultation Desk</strong>
                    <span className="text-[#9B9B9B]">Daily: 10:00 AM – 09:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F5F2EA] font-medium mb-0.5">Service Reach</strong>
                    <span className="text-[#9B9B9B]">
                      Sheopur, Shivpuri, Gwalior & regional event venues
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold block mb-2">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] font-normal tracking-tight">
            Catering Across Every Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATERING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#141414] border border-white/[0.06] hover:border-accent-gold/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 border border-white/[0.1] text-accent-gold flex items-center justify-center mb-6 bg-[#181818] group-hover:border-accent-gold transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B9B9B] block mb-2">
                  {service.suitableFor}
                </span>

                <h3 className="font-serif text-2xl text-[#F5F2EA] font-normal mb-3 group-hover:text-accent-gold transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-[#9B9B9B] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono text-[#9B9B9B]">Custom Menus</span>
                <span className="text-xs text-accent-gold font-medium">Enquire →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#121212]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold block mb-2">
              Our Process
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA]">
              Three Simple Steps to Flawless Hospitality
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATERING_PROCESS.map((p) => (
              <div key={p.step} className="p-6 bg-[#161616] border border-white/[0.05] relative">
                <span className="font-serif text-4xl text-accent-gold font-light block mb-4">
                  {p.step}
                </span>
                <h4 className="font-serif text-xl text-[#F5F2EA] mb-2">{p.title}</h4>
                <p className="text-xs text-[#9B9B9B] font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Request Form */}
      <section id="catering-proposal" className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#141414] border border-white/[0.1] shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold block mb-2">
              Get Started
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] mb-3">
              Request a Custom Catering Quote
            </h3>
            <p className="text-xs text-[#9B9B9B] font-light">
              Tell us about your expected guests and event date. We will prepare a customized proposal with live counters and course options.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 border border-accent-gold/40 bg-accent-gold/5 text-center">
              <CheckCircle className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h4 className="font-serif text-2xl text-[#F5F2EA] mb-2">
                Thank You, {formData.name}!
              </h4>
              <p className="text-xs text-[#9B9B9B] mb-6">
                Our catering manager will call you within 24 hours to discuss your event menu.
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-accent-gold text-[#0B0B0B] text-xs uppercase tracking-wider font-medium"
              >
                Continue on WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Vikramaditya Singh"
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none cursor-pointer"
                  >
                    <option value="Weddings & Receptions">Weddings & Receptions</option>
                    <option value="Birthday Celebrations">Birthday Celebrations</option>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Private Parties">Private Parties</option>
                    <option value="Social Gatherings">Social Gatherings</option>
                    <option value="Custom Catering">Custom Catering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                    Guest Count *
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none cursor-pointer"
                  >
                    <option value="25 - 50 Guests">25 – 50 Guests</option>
                    <option value="50 - 150 Guests">50 – 150 Guests</option>
                    <option value="150 - 300 Guests">150 – 300 Guests</option>
                    <option value="300 - 500 Guests">300 – 500 Guests</option>
                    <option value="500+ Guests">500+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                  Event Venue / City *
                </label>
                <input
                  type="text"
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Lawn in Sheopur, Banquet in Shivpuri, or Private Garden"
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono text-[#9B9B9B] mb-2">
                  Menu & Cuisine Preferences
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Special live counters (chaat, pasta, dosa, tandoor), mocktail stations, traditional sweets, etc."
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-sm text-[#F5F2EA] focus:border-accent-gold focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="text-xs text-green-400 hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Enquiry</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-accent-gold text-[#0B0B0B] text-xs uppercase tracking-wider font-medium hover:bg-[#e4bf4a] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Proposal Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
