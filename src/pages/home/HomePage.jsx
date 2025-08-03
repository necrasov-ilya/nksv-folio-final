import Container from '../../shared/ui/Container/Container';
import Header from '../../widgets/header/Header';
import About from '../../widgets/about/About';
import Services from '../../widgets/services/Services';
import Skills from '../../widgets/skills/Skills';
import Portfolio from '../../widgets/portfolio/Portfolio';
import Projects from '../../widgets/projects/Projects';
import FAQ from '../../widgets/faq/FAQ';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />

      <main className="home-page__main">
        <section id="about" className="home-page__section">
          <Container>
            <About />
          </Container>
        </section>

        <section id="services" className="home-page__section">
          <Container>
            <Services />
          </Container>
        </section>

        <section id="skills" className="home-page__section">
          <Container>
            <Skills />
          </Container>
        </section>

        <section id="portfolio" className="home-page__section">
          <Container>
            <Portfolio />
          </Container>
        </section>

        <section id="projects" className="home-page__section">
          <Container>
            <Projects />
          </Container>
        </section>

        <section id="faq" className="home-page__section">
          <Container>
            <FAQ />
          </Container>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
