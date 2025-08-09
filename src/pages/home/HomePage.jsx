import Container from "../../shared/ui/Container/Container";
import Header from "../../widgets/header/Header";
import About from "../../widgets/about/About";
import FAQ from "../../widgets/faq/FAQ";
import Services from "../../widgets/services/Services";
import Skills from "../../widgets/skills/Skills";
import Portfolio from "../../widgets/portfolio/Portfolio";
import Projects from "../../widgets/projects/Projects";
import Footer from "../../widgets/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main className="home-page__main" role="main">
                <About />
                <Services />
                <Skills />
                <Portfolio />
                <Projects />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
