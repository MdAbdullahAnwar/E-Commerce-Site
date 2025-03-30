import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">MobileMart</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <img src="https://cdn-icons-png.flaticon.com/512/1409/1409945.png" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
