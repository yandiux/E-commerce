import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterScreen;
