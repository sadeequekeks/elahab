import { avatar } from "../lib/images";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Okonkwo",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "El Albab made buying in the New Administrative Capital seamless. From WhatsApp intro to signing, every question was answered within hours. Truly professional.",
    image: avatar(33, 150),
  },
  {
    id: "2",
    name: "Sarah Mensah",
    location: "Accra, Ghana",
    rating: 5,
    text: "As a first-time buyer in Egypt, I was nervous about legal processes. The team walked me through everything and I now own a beautiful North Coast chalet.",
    image: avatar(45, 150),
  },
  {
    id: "3",
    name: "James Adeyemi",
    location: "London, UK",
    rating: 5,
    text: "I invested in a commercial unit in NAC through El Albab. Their market insights were spot-on and the ROI projections have already started materializing.",
    image: avatar(52, 150),
  },
  {
    id: "4",
    name: "Aisha Mohammed",
    location: "Abuja, Nigeria",
    rating: 5,
    text: "What sets them apart is trust. No pressure, no surprises — just honest advice and properties that matched exactly what they promised.",
    image: avatar(26, 150),
  },
  {
    id: "5",
    name: "Michael Chen",
    location: "Dubai, UAE",
    rating: 5,
    text: "Remote purchase was my biggest concern. El Albab arranged virtual tours, legal review, and payment plans that worked across borders. Highly recommended.",
    image: avatar(68, 150),
  },
  {
    id: "6",
    name: "Grace Nwosu",
    location: "Port Harcourt, Nigeria",
    rating: 5,
    text: "Our family villa in New Cairo exceeded expectations. The founders genuinely care — they treated our investment like their own.",
    image: avatar(47, 150),
  },
];

export const reviewCount = 500;
