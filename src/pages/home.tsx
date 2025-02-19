import AboutSection from '@/components/modules/about';
import ContactSection from '@/components/modules/contact';
import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';
import HeroSection from '@/components/modules/hero';
import PortfolioSection from '@/components/modules/portfolio';
import ResumeSection from '@/components/modules/resume';

export default function HomePage() {
    return (
        <main className="container relative p-0 sm:mx-auto sm:px-4 sm:pt-4">
            <Header />
            <HeroSection />
            <AboutSection />
            <ResumeSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
