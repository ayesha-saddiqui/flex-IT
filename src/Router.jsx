import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { PortfolioPage } from "./pages/Portfolio";
import { TestimonialPage } from "./pages/Testimonial";
import { TeamPage } from "./pages/Team";
import { PricingPage } from "./pages/Pricing";
import { FaqPage } from "./pages/Faq";
import { BlogPage } from "./pages/Blog";
import { PrivacyPage } from "./pages/Privacy";
import { BlogDetailPage } from "./pages/BlogDetail";
import { NewsPage } from "./pages/News";
import { ContactPage } from "./pages/Contact";

export const Routers = () => {
  const layoutRef = useRef();

  return (
    <Routes>
      <Route path="/" element={<Layout layoutRef={layoutRef} />}>
        <Route index element={<Home layoutRef={layoutRef} />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="testimonial" element={<TestimonialPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="blogDetail" element={<BlogDetailPage />} />
        <Route path="blog" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
