import { avatar } from "../lib/images";

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const founders: Founder[] = [
  {
    name: "Habib Ibrahim Habib",
    role: "Co-Founder",
    bio: "Co-founder of El Albab Real Estate, licensed in Egypt and dedicated to connecting African clients with Egypt's finest property opportunities.",
    image: avatar(5),
  },
  {
    name: "Abdulmusawwir Shahru Haruna",
    role: "Co-Founder",
    bio: "Co-founder of El Albab Real Estate, bringing trusted guidance and professional service to buyers and investors across Africa and the diaspora.",
    image: avatar(12),
  },
  {
    name: "AbdulGafar Adam",
    role: "Co-Founder",
    bio: "Co-founder of El Albab Real Estate, combining expert guidance with market insight to deliver the best possible real estate outcomes.",
    image: avatar(9),
  },
  {
    name: "TBA",
    role: "Co-Founder",
    bio: "Founder profile coming soon.",
    image: avatar(15),
  },
];

export const mission =
  "Our Mission is to deliver exceptional real estate services through innovation, professionalism, and a commitment to understanding our client's unique needs.";

export const vision =
  "Our Vision is to be a leading force in creating real estate opportunities that shape better communities and brighter futures.";

export const whyChooseUs = [
  {
    title: "Trust",
    description:
      "Licensed operations in Egypt with verified developers and documented every step of your purchase.",
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and no hidden fees — you always know where your investment stands.",
  },
  {
    title: "African Identity",
    description:
      "The first Nigerian-licensed agency in Egypt, we understand your journey and speak your language — literally and culturally.",
  },
  {
    title: "Professionalism",
    description:
      "International-grade service with local expertise, from property tours to legal handover.",
  },
];
