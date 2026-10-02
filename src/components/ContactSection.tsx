import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  ArrowUpRight,
  Calendar,
  Compass,
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface ContactSectionProps {
  onOpenReserve: () => void;
  onPlanEvent: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenReserve,
  onPlanEvent,
}) => {
  const cleanPhone = BRAND_INFO.contact.phone.replace(/[^0-9+]/g, '');

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${BRAND_INFO.contact.whatsapp}?text=Hello%20Narrow%20Gauge%20team,%20I%20would%20like%20to%20connect`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/[0.08] bg-white/[0.02] text-accent-champagne text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <span>Get in Touch</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-normal tracking-tight mb-6">
            Let's Make Your Next Moment Memorable.
          </h2>

          <p className="text-base text-[#9B9B9B] font-light leading-relaxed max-w-2xl">
            Whether booking an evening table at Narrow Gauge Restaurant, curating a bespoke wedding spread with NG Catters, or reserving a quiet corner at Uknow Café — we are here to assist.
          </p>
        </div>

        {/* 4 Primary Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <a
            href={BRAND_INFO.contact.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-[#141414] border border-white/[0.08] hover:border-accent-champagne/40 transition-all flex flex-col items-center justify-center text-center group"
          >
            <Compass className="w-5 h-5 text-accent-champagne mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#F5F2EA]">
              Visit Us
            </span>
            <span className="text-[10px] text-[#9B9B9B] font-mono mt-1">Directions & Map</span>
          </a>

          <a
            href={`tel:${cleanPhone}`}
            className="p-5 bg-[#141414] border border-white/[0.08] hover:border-accent-champagne/40 transition-all flex flex-col items-center justify-center text-center group"
          >
            <Phone className="w-5 h-5 text-accent-champagne mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#F5F2EA]">
              Call Us
            </span>
            <span className="text-[10px] text-[#9B9B9B] font-mono mt-1">{BRAND_INFO.contact.phone}</span>
          </a>

          <button
            onClick={openWhatsApp}
            className="p-5 bg-[#141414] border border-white/[0.08] hover:border-green-400/40 transition-all flex flex-col items-center justify-center text-center group"
          >
            <MessageSquare className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#F5F2EA]">
              WhatsApp
            </span>
            <span className="text-[10px] text-[#9B9B9B] font-mono mt-1">Instant Response</span>
          </button>

          <button
            onClick={onPlanEvent}
            className="p-5 bg-[#141414] border border-white/[0.08] hover:border-accent-champagne/40 transition-all flex flex-col items-center justify-center text-center group"
          >
            <Calendar className="w-5 h-5 text-accent-gold mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#F5F2EA]">
              Plan an Event
            </span>
            <span className="text-[10px] text-[#9B9B9B] font-mono mt-1">NG Catters Desk</span>
          </button>
        </div>

        {/* Contact Info Grid & Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-6 p-8 sm:p-10 bg-[#121212] border border-white/[0.08] flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-champagne block mb-2">
                Locations & Service Hours
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EA] font-normal mb-6">
                Narrow Gauge Hospitality Quarter
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-accent-champagne shrink-0 mt-0.5 bg-[#161616]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#F5F2EA] mb-1">
                      Address
                    </h4>
                    <p className="text-xs text-[#9B9B9B] font-light leading-relaxed">
                      {BRAND_INFO.contact.addressPlaceholder}
                    </p>
                    <span className="text-[11px] text-accent-champagne/80 font-mono mt-1 block">
                      Valet Parking Available
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-accent-champagne shrink-0 mt-0.5 bg-[#161616]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#F5F2EA] mb-1">
                      Experience Hours
                    </h4>
                    <div className="space-y-1 text-xs text-[#9B9B9B] font-light">
                      <p>
                        <strong className="text-[#F5F2EA] font-normal">Restaurant:</strong> {BRAND_INFO.contact.restaurantHours}
                      </p>
                      <p>
                        <strong className="text-[#F5F2EA] font-normal">Uknow Café:</strong> {BRAND_INFO.contact.cafeHours}
                      </p>
                      <p>
                        <strong className="text-[#F5F2EA] font-normal">NG Catters:</strong> {BRAND_INFO.contact.cateringHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-accent-champagne shrink-0 mt-0.5 bg-[#161616]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#F5F2EA] mb-1">
                      Electronic Inquiries
                    </h4>
                    <p className="text-xs text-[#9B9B9B] font-light">
                      {BRAND_INFO.contact.email}
                    </p>
                    <p className="text-xs text-[#9B9B9B] font-light">
                      Reservations & General Enquiries: {BRAND_INFO.contact.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <button
                onClick={onOpenReserve}
                className="px-6 py-3 bg-accent-champagne text-[#0B0B0B] text-xs uppercase tracking-wider font-medium hover:bg-[#D8BE9A] transition-all flex items-center gap-2"
              >
                <span>Reserve a Table</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-[#9B9B9B]">
                Walk-ins Welcome
              </span>
            </div>
          </div>

          {/* Interactive Google Map Showcase */}
          <div className="lg:col-span-6 relative border border-white/[0.08] overflow-hidden min-h-[420px] bg-[#141414] flex flex-col">
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#0B0B0B]/85 backdrop-blur-md border border-white/10 text-xs text-[#F5F2EA] font-mono">
              <span className="text-accent-champagne mr-2">●</span>Google Maps Location
            </div>

            <iframe
              src={BRAND_INFO.contact.googleMapsEmbedUrl}
              title="Narrow Gauge Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1 min-h-[360px]"
            />

            <div className="p-4 bg-[#121212] border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#9B9B9B] font-light">
                Convenient parking & central accessibility
              </span>
              <a
                href={BRAND_INFO.contact.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent-champagne hover:underline flex items-center gap-1 font-medium tracking-wide uppercase font-mono"
              >
                <span>Open in Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
