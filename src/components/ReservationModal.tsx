import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { useTheme } from '../context/ThemeContext';

interface ReservationModalProps {
  isOpen: boolean;
  initialExperience?: 'restaurant' | 'catering' | 'cafe';
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  initialExperience = 'restaurant',
  onClose,
  onSuccess,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [experience, setExperience] = useState<'restaurant' | 'cafe' | 'catering'>(
    initialExperience
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: initialExperience === 'catering' ? '100–300 Guests' : '2 Guests',
    eventType: 'Wedding / Reception',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sync initial experience when modal opens
  useEffect(() => {
    if (isOpen) {
      setExperience(initialExperience);
      setFormData((prev) => ({
        ...prev,
        guests: initialExperience === 'catering' ? '100–300 Guests' : '2 Guests',
      }));
    }
  }, [isOpen, initialExperience]);

  // Accessibility: Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Accessibility: Prevent body background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (exp: 'restaurant' | 'cafe' | 'catering') => {
    setExperience(exp);
    setFormData((prev) => ({
      ...prev,
      guests: exp === 'catering' ? '100–300 Guests' : '2 Guests',
    }));
  };

  const isCatering = experience === 'catering';

  const getExperienceTitle = () => {
    if (experience === 'restaurant') return 'Narrow Gauge Restaurant';
    if (experience === 'cafe') return 'Uknow Café';
    return 'NG Catters (Catering)';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      onSuccess(
        isCatering
          ? `Catering inquiry for ${formData.name} (${formData.eventType}) has been received!`
          : `Table reservation request for ${formData.name} at ${getExperienceTitle()} has been received!`
      );
    }, 600);
  };

  const handleWhatsAppBooking = () => {
    const text = isCatering
      ? encodeURIComponent(
          `Hello NG Catters! I would like to inquire about event catering:\nName: ${
            formData.name || 'Guest'
          }\nEvent Type: ${formData.eventType}\nDate: ${
            formData.date || 'Upcoming'
          }\nGuest Count: ${formData.guests}\nRequirements: ${formData.notes || 'Full catering spread'}`
        )
      : encodeURIComponent(
          `Hello Narrow Gauge! I want to reserve a table at ${getExperienceTitle()}:\nName: ${
            formData.name || 'Guest'
          }\nDate: ${formData.date || 'Today'}\nTime: ${formData.time}\nParty Size: ${
            formData.guests
          }\nNotes: ${formData.notes || 'Standard booking'}`
        );
    window.open(`https://wa.me/${BRAND_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative w-full max-w-xl border p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto transition-colors duration-300 ${
          isDark
            ? 'bg-[#141414] border-white/[0.12] text-[#F5F2EA]'
            : 'bg-[#FFFFFF] border-[#E2D9CC] text-[#141210]'
        }`}
      >
        {/* Accessible Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 border transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-champagne focus:outline-none ${
            isDark
              ? 'text-[#9B9B9B] hover:text-[#F5F2EA] border-white/[0.08] hover:border-white/20'
              : 'text-[#5C564D] hover:text-[#141210] border-stone-200 hover:bg-stone-100'
          }`}
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isConfirmed ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle
              className={`w-14 h-14 mb-4 ${
                isDark ? 'text-accent-champagne' : 'text-green-600'
              }`}
            />
            <h3
              id="modal-title"
              className="font-serif text-3xl mb-2"
            >
              {isCatering ? 'Catering Inquiry Received' : 'Reservation Requested'}
            </h3>
            <p
              className={`text-sm font-light max-w-sm mb-6 leading-relaxed ${
                isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
              }`}
            >
              Thank you,{' '}
              <strong className={isDark ? 'text-[#F5F2EA]' : 'text-[#141210]'}>
                {formData.name}
              </strong>
              .{' '}
              {isCatering
                ? 'Our catering director will review your event details and reach out shortly with a tailored proposal.'
                : `Our host at ${getExperienceTitle()} will confirm table availability and send you an SMS / WhatsApp message shortly.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className={`w-full py-3 text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? 'bg-accent-champagne text-[#0B0B0B] hover:bg-[#D8BE9A]'
                    : 'bg-[#8C571E] text-white hover:bg-[#734415]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className={`w-full py-3 border text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/[0.1] text-[#9B9B9B] hover:text-[#F5F2EA]'
                    : 'border-stone-300 text-[#5C564D] hover:text-[#141210]'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.25em] block mb-1 ${
                  isDark ? 'text-accent-champagne' : 'text-[#8C571E]'
                }`}
              >
                {isCatering ? 'NG Catters · Sheopur & Regional MP' : 'Direct Host Booking · Sheopur'}
              </span>
              <h2
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl font-normal"
              >
                {isCatering
                  ? 'Inquire for Wedding / Event Catering'
                  : experience === 'cafe'
                  ? 'Reserve a Corner at Uknow Café'
                  : 'Reserve a Dining Table'}
              </h2>
            </div>

            {/* Experience Selector Tabs */}
            <div
              className={`grid grid-cols-3 gap-2 mb-6 border-b pb-4 ${
                isDark ? 'border-white/[0.08]' : 'border-stone-200'
              }`}
            >
              <button
                type="button"
                onClick={() => handleExperienceChange('restaurant')}
                className={`py-2 px-2 text-center text-xs tracking-wider uppercase font-medium transition-all cursor-pointer ${
                  experience === 'restaurant'
                    ? isDark
                      ? 'border-b-2 border-accent-champagne text-[#F5F2EA] bg-white/[0.04]'
                      : 'border-b-2 border-[#8C571E] text-[#141210] bg-stone-100 font-semibold'
                    : isDark
                    ? 'text-[#9B9B9B] hover:text-[#F5F2EA]'
                    : 'text-[#6E665B] hover:text-[#141210]'
                }`}
              >
                Restaurant
              </button>
              <button
                type="button"
                onClick={() => handleExperienceChange('catering')}
                className={`py-2 px-2 text-center text-xs tracking-wider uppercase font-medium transition-all cursor-pointer ${
                  experience === 'catering'
                    ? isDark
                      ? 'border-b-2 border-accent-gold text-accent-gold bg-accent-gold/10'
                      : 'border-b-2 border-[#8A6008] text-[#8A6008] bg-stone-100 font-semibold'
                    : isDark
                    ? 'text-[#9B9B9B] hover:text-[#F5F2EA]'
                    : 'text-[#6E665B] hover:text-[#141210]'
                }`}
              >
                NG Catters
              </button>
              <button
                type="button"
                onClick={() => handleExperienceChange('cafe')}
                className={`py-2 px-2 text-center text-xs tracking-wider uppercase font-medium transition-all cursor-pointer ${
                  experience === 'cafe'
                    ? isDark
                      ? 'border-b-2 border-[#C89666] text-[#F5F2EA] bg-white/[0.04]'
                      : 'border-b-2 border-[#B24F10] text-[#141210] bg-stone-100 font-semibold'
                    : isDark
                    ? 'text-[#9B9B9B] hover:text-[#F5F2EA]'
                    : 'text-[#6E665B] hover:text-[#141210]'
                }`}
              >
                Uknow Café
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone with explicit labels & IDs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="reserve-name"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    id="reserve-name"
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-3.5 py-2.5 border text-sm transition-colors focus:outline-none ${
                      isDark
                        ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                        : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E] focus:ring-1 focus:ring-[#8C571E]'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="reserve-phone"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="reserve-phone"
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 97534 84848"
                    className={`w-full px-3.5 py-2.5 border text-sm transition-colors focus:outline-none ${
                      isDark
                        ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                        : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E] focus:ring-1 focus:ring-[#8C571E]'
                    }`}
                  />
                </div>
              </div>

              {/* Event Type selector (Catering specific) */}
              {isCatering && (
                <div>
                  <label
                    htmlFor="reserve-event-type"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    Event Occasion / Type *
                  </label>
                  <select
                    id="reserve-event-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 border text-sm transition-colors focus:outline-none cursor-pointer ${
                      isDark
                        ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-gold'
                        : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8A6008] focus:ring-1 focus:ring-[#8A6008]'
                    }`}
                  >
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Engagement / Anniversary">Engagement / Anniversary</option>
                    <option value="Corporate Banquet / Gala">Corporate Banquet / Gala</option>
                    <option value="Birthday / Milestone Celebration">Birthday / Milestone Celebration</option>
                    <option value="Other Private Gathering">Other Private Gathering</option>
                  </select>
                </div>
              )}

              {/* Date, Time / Schedule, and Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="reserve-date"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    {isCatering ? 'Event Date *' : 'Booking Date *'}
                  </label>
                  <input
                    id="reserve-date"
                    type="date"
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 border text-sm transition-colors focus:outline-none ${
                      isDark
                        ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                        : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E]'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="reserve-time"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    {isCatering ? 'Service Slot' : 'Preferred Time *'}
                  </label>
                  {isCatering ? (
                    <select
                      id="reserve-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border text-sm transition-colors focus:outline-none cursor-pointer ${
                        isDark
                          ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E]'
                      }`}
                    >
                      <option value="Dinner Buffet">Dinner Buffet (Evening)</option>
                      <option value="Lunch Banquet">Lunch Banquet (Afternoon)</option>
                      <option value="Full Day Function">Full Day Function</option>
                      <option value="High Tea & Snacks">High Tea & Snacks</option>
                    </select>
                  ) : (
                    <input
                      id="reserve-time"
                      type="time"
                      required
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border text-sm transition-colors focus:outline-none ${
                        isDark
                          ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E]'
                      }`}
                    />
                  )}
                </div>

                <div>
                  <label
                    htmlFor="reserve-guests"
                    className={`block text-[11px] font-mono uppercase mb-1.5 ${
                      isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                    }`}
                  >
                    {isCatering ? 'Guest Count *' : 'Party Size *'}
                  </label>
                  <select
                    id="reserve-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 border text-sm transition-colors focus:outline-none cursor-pointer ${
                      isDark
                        ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                        : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E]'
                    }`}
                  >
                    {isCatering ? (
                      <>
                        <option value="50–100 Guests">50 – 100 Guests</option>
                        <option value="100–300 Guests">100 – 300 Guests</option>
                        <option value="300–600 Guests">300 – 600 Guests</option>
                        <option value="600–1,000+ Guests">600 – 1,000+ Guests</option>
                      </>
                    ) : (
                      <>
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3-4 Guests">3 – 4 Guests</option>
                        <option value="5-8 Guests">5 – 8 Guests</option>
                        <option value="8+ Guests">8+ (Large Group)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="reserve-notes"
                  className={`block text-[11px] font-mono uppercase mb-1.5 ${
                    isDark ? 'text-[#9B9B9B]' : 'text-[#5C564D]'
                  }`}
                >
                  {isCatering
                    ? 'Venue Location / Menu Preferences'
                    : 'Special Requests / Dietary Notes'}
                </label>
                <textarea
                  id="reserve-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={
                    isCatering
                      ? 'Event venue in Sheopur, preferred regional dishes, live counter requirements...'
                      : 'Anniversary celebration, window seating, quiet booth, allergies, etc.'
                  }
                  className={`w-full px-3.5 py-2.5 border text-sm transition-colors focus:outline-none resize-none ${
                    isDark
                      ? 'bg-[#0B0B0B] border-white/[0.1] text-[#F5F2EA] focus:border-accent-champagne'
                      : 'bg-stone-50 border-stone-300 text-stone-900 focus:border-[#8C571E]'
                  }`}
                />
              </div>

              {/* Action Buttons */}
              <div
                className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
                  isDark ? 'border-white/[0.08]' : 'border-stone-200'
                }`}
              >
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto text-xs text-[#25D366] hover:underline flex items-center justify-center gap-1.5 py-1 font-mono cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {isCatering
                      ? 'Chat on WhatsApp for Instant Quote'
                      : 'Instant WhatsApp Reservation'}
                  </span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-all disabled:opacity-50 cursor-pointer ${
                    isDark
                      ? isCatering
                        ? 'bg-accent-gold text-[#0B0B0B] hover:bg-yellow-400'
                        : 'bg-accent-champagne text-[#0B0B0B] hover:bg-white'
                      : isCatering
                      ? 'bg-[#8A6008] text-white hover:bg-[#6E4B05] shadow-sm'
                      : 'bg-[#8C571E] text-white hover:bg-[#734415] shadow-sm'
                  }`}
                >
                  {isSubmitting
                    ? 'Submitting...'
                    : isCatering
                    ? 'Submit Catering Inquiry'
                    : 'Confirm Table Request'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
