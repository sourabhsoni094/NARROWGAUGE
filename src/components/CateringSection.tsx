import React, { useState } from 'react';
import {
  HeartHandshake,
  Cake,
  Briefcase,
  Wine,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import { CATERING_SERVICES, CATERING_PROCESS, BRAND_INFO } from '../data/brandData';
import { CateringInquiry } from '../types';
import { NGCattersLogo } from './Logos';

interface CateringSectionProps {
  onSuccessToast: (message: string) => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState<CateringInquiry>({
    name: '',
    phone: '',
    eventType: 'Weddings & Receptions',
    eventDate: '',
    guestCount: '50-100',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast(
        `Thank you ${formData.name}! Your catering inquiry for ${formData.eventType} has been received.`
      );
    }, 800);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello NG Catters, I want to plan an event:\nName: ${formData.name || 'Inquirer'}\nEvent: ${formData.eventType}\nDate: ${formData.eventDate || 'TBD'}\nGuests: ${formData.guestCount}\nLocation: ${formData.location || 'TBD'}`
    );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="catering" className="py-28 sm:py-36 bg-[#0B0B0B] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent-gold/40 bg-accent-gold/10 text-accent-gold text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <span>Experience 02 · Bespoke Catering</span>
          </div>

          <div className="mb-6">
            <NGCattersLogo showImage={true} />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-4">
            NG Catters
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-accent-champagne/90 font-light mb-6">
            “We bring the experience to you.”
          </p>

          <p className="text-[#9B9B9B] text-base leading-relaxed max-w-2xl font-light">
            Whether an intimate dinner for twenty or a grand wedding celebration for hundreds, NG Catters crafts custom menus, live counter theatrics and seamless hospitality at your desired location.
          </p>
        </div>

        {/* 6 Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CATERING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#121212] border border-white/[0.06] hover:border-accent-gold/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 border border-white/[0.1] group-hover:border-accent-gold/60 text-accent-gold flex items-center justify-center mb-6 transition-colors bg-[#181818]">
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9B9B9B] mb-2">
                  {service.suitableFor}
                </div>

                <h3 className="font-serif text-2xl text-[#F5F2EA] font-normal mb-3 group-hover:text-accent-gold transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-[#9B9B9B] font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#9B9B9B] font-mono">
                  Custom Curated
                </span>
                <span className="text-xs text-accent-gold font-sans font-medium">Bespoke Setup →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Large Visual Event Showcase with 3-Step Process */}
        <div className="mb-24 relative overflow-hidden border border-white/[0.08] bg-[#121212]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Event Image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="NG Catters Wedding Banquet"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0B0B0B]/40 to-[#121212]" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-gold block mb-1">
                  Your Event. Our Kitchen.
                </span>
                <p className="font-serif text-xl text-[#F5F2EA]">
                  Impeccable table settings and customized culinary stations
                </p>
              </div>
            </div>

            {/* 3 Step Process */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#9B9B9B] mb-2">
                The Journey
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] font-normal mb-8">
                How We Bring It Together
              </h3>

              <div className="space-y-8">
                {CATERING_PROCESS.map((step) => (
                  <div key={step.step} className="flex items-start gap-6 group">
                    <span className="font-serif text-3xl sm:text-4xl text-accent-gold font-light opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-serif text-xl text-[#F5F2EA] mb-1.5 group-hover:text-accent-champagne transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#9B9B9B] font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                <a
                  href="#catering-form"
                  className="px-6 py-3.5 bg-accent-gold text-[#0B0B0B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#e4bf4a] transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Plan Your Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="px-6 py-3.5 border border-white/[0.14] hover:border-green-400 text-[#F5F2EA] hover:text-green-400 text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-green-400" />
                  <span>Call / WhatsApp Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Catering Enquiry Form */}
        <div id="catering-form" className="max-w-4xl mx-auto p-8 sm:p-12 bg-[#141414] border border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-gold block mb-2">
              Event Consultation
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] font-normal mb-3">
              Request a Bespoke Catering Proposal
            </h3>
            <p className="text-xs sm:text-sm text-[#9B9B9B] font-light">
              Fill in your preliminary details below. Our events manager will review your vision and connect within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 border border-accent-gold/40 bg-accent-gold/5 text-center flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-accent-gold mb-4" />
              <h4 className="font-serif text-2xl text-[#F5F2EA] mb-2">
                Thank You, {formData.name}
              </h4>
              <p className="text-sm text-[#9B9B9B] font-light max-w-md mb-6">
                Your event enquiry has been logged successfully. If your date is approaching quickly, feel free to ping us immediately on WhatsApp for priority scheduling.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider border border-white/[0.1] text-[#F5F2EA]"
                >
                  Submit Another Inquiry
                </button>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider bg-accent-gold text-[#0B0B0B] font-medium"
                >
                  Open WhatsApp Chat
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors cursor-pointer"
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
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="15 - 50 Guests">15 – 50 Guests</option>
                    <option value="50 - 150 Guests">50 – 150 Guests</option>
                    <option value="150 - 300 Guests">150 – 300 Guests</option>
                    <option value="300 - 500 Guests">300 – 500 Guests</option>
                    <option value="500+ Guests">500+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                  Event Venue / Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Lawn, Banquet Hall, or Private Residence address"
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#9B9B9B] mb-2">
                  Message / Special Cuisine Preferences
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details on dietary preferences, live counter ideas, themes or specific dishes you have in mind..."
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/[0.1] text-[#F5F2EA] text-sm focus:border-accent-gold focus:outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <p className="text-[11px] text-[#9B9B9B] font-mono">
                  * All quotes are custom crafted without hidden charges.
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-accent-gold text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#e4bf4a] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Proposal...' : 'Submit Inquiry'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
