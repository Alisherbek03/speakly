import Button from "../button/Button";
import AboutImage from "../../assets/AboutPhone.svg";
import "./about.css";

const About = () => {
  return (
    <section>
      <div id="about" className="about">
        <div className="about-text">
          <h2>About</h2>
          <p>
            Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
            Dan Jason Fried Pensiun!
          </p>
          <p>Akan Membuat DHH Dan Jason Fried Pensiun!</p>
          <Button text="Learn more" />
        </div>
        <img src={AboutImage} alt="PhoneImage" />
      </div>
    </section>
  );
};

export default About;
