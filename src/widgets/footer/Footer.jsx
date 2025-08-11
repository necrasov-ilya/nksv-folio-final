import Container from '../../shared/ui/Container/Container';
import './Footer.css';

const Footer = ({ id = 'footer', name = 'Nikita Krasnov', telegram = 'https://t.me/', email = 'hello@example.com' }) => {
  return (
    <footer id={id} className="footer section">
      <Container size="xl">
        <div className="footer__inner">
          <div className="footer__brand">{name}</div>
          <div className="footer__links">
            <a href={telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={`mailto:${email}`}>Email</a>
          </div>
          <div className="footer__copy">© {new Date().getFullYear()}</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
