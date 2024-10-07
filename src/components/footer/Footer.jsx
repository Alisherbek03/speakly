import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-speakly">
        <h3>Speakly</h3>
        <p>
          Send, receive and transfer money ke sesama orang yang punya wallet and
          with ease onn the world leading
        </p>
      </div>
      <div className="footer-categories">
        <h4>Categories</h4>
        <p>E-wallet</p>
        <p>Send Money</p>
        <p>Receive Money</p>
        <p>Mobile Apps</p>
      </div>
      <div className="footer-contact">
        <h4>Contact us</h4>
        <p>Account</p>
        <p>Custumer services</p>
        <p>Accesbility</p>
        <p>Privacy policy</p>
      </div>
      <div className="footer-get">
        <h4>Get in touch</h4>
        <p>Indonesia Jl. Griya Permata Hijau no D1 Sukabumi Utara 543881</p>
        <div className="link-logo">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
