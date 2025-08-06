import Container from "../../shared/ui/Container/Container";
import Header from "../../widgets/header/Header";
import About from "../../widgets/about/About";
import FAQ from "../../widgets/faq/FAQ";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
                <Header />

            <main className="home-page__main">
                <Container size="full">
                    <About />
                </Container>
            </main>
        </div>
    );
};

export default HomePage;
