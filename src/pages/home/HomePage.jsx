import Container from "../../shared/ui/Container/Container";
import Header from "../../widgets/header/Header";
import HeroSection from "../../widgets/hero/HeroSection";
import AboutSection from "../../widgets/about/AboutSection";
import ServicesSection from "../../widgets/services/ServicesSection";
import SkillsSection from "../../widgets/skills/SkillsSection";
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
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <SkillsSection />
                <PortfolioSection />
                <ProjectsSection />
                <FaqSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
