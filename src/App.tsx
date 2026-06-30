import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const PropertiesPage = lazy(() => import("./pages/PropertiesPage").then((m) => ({ default: m.PropertiesPage })));
const PropertyDetailPage = lazy(() => import("./pages/PropertyDetailPage").then((m) => ({ default: m.PropertyDetailPage })));
const InvestEgyptPage = lazy(() => import("./pages/InvestEgyptPage").then((m) => ({ default: m.InvestEgyptPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage").then((m) => ({ default: m.TestimonialsPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage })));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-gold" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="properties/:slug" element={<PropertyDetailPage />} />
          <Route path="invest" element={<InvestEgyptPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
