import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FadeIn } from "@/components/ui/FadeIn";
import { localBusinessSchema, makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata(
  "Pana Plumbing | Sydney's Trusted Local Plumber",
  "Modern plumbing solutions across Sydney including emergency plumbing, blocked drains, and hot water services.",
  "/"
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FadeIn>
        <ServicesGrid />
      </FadeIn>
      <FadeIn>
        <ProjectPreview />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <ContactSection />
      </FadeIn>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </main>
  );
}
