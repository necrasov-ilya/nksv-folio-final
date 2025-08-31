import Container from "../../shared/ui/Container/Container";
import Reveal from "../../shared/ui/Reveal/Reveal";
import Header from "../../widgets/header/Header";
import HeroSection from "../../widgets/hero/HeroSection";
import AboutSection from "../../widgets/about/AboutSection";
import ServicesSection from "../../widgets/services/ServicesSection";
import SkillsGallery from "../../widgets/skillsGallery/SkillsGallery";
import PortfolioSection from "../../widgets/portfolio/PortfolioSection";
import ProjectsSection from "../../widgets/projects/ProjectsSection";
import FaqSection from "../../widgets/faq/FaqSection";
import Footer from "../../widgets/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
    return (
    <div className="home-page" id="top">
            <Header />
            <main className="home-page__main">
                <Reveal variant="hero">
                    <HeroSection />
                </Reveal>
                <Reveal variant="fade-up">
                    <AboutSection />
                </Reveal>
                <Reveal variant="fade-up">
                    <SkillsGallery />
                </Reveal>
                <Reveal variant="fade-up">
                    <ServicesSection />
                </Reveal>
                <Reveal variant="fade-up">
                    <PortfolioSection />
                </Reveal>
                <Reveal variant="fade-up">
                    <ProjectsSection />
                </Reveal>
                <Reveal variant="fade-up">
                    <FaqSection />
                </Reveal>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
