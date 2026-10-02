export type ExperienceId = 'restaurant' | 'catering' | 'cafe';

export interface ExperienceInfo {
  id: ExperienceId;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  ctaText: string;
  sectionId: string;
  image: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  visualDirectionNotes: string;
  instagramUrl?: string;
  instagramHandle?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'mains' | 'starters' | 'chinese' | 'pizza-cafe' | 'coffee' | 'shakes' | 'bites' | 'desserts' | 'sandwiches' | 'beverages';
  dietary?: 'veg' | 'non-veg' | 'chef-special' | 'vegan';
  experience: 'restaurant' | 'cafe';
  price?: string;
  tags?: string[];
}

export interface CateringService {
  id: string;
  name: string;
  description: string;
  iconName: string;
  suitableFor: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Restaurant' | 'NG Catters' | 'Uknow Café';
  experienceTag: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface CateringInquiry {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  message: string;
}

export interface ReservationBooking {
  experience: 'restaurant' | 'cafe';
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
