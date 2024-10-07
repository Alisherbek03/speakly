import "./App.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import HeaderLength from "../../assets/headerlength.svg";
import About from "../about/About";
import Logo from "../logo/Logo";
import Blog from "../blog/Blog";
import BlogImage from "../../assets/blogai.svg";
import BlogImagetwo from "../../assets/blog-two.svg";
import BlogImagethree from "../../assets/blog-three.svg";
import Record from "../record/Record";
import Recordoneimage from "../../assets/recordone.svg";
import Recordtwoimage from "../../assets/recordtwo.svg";
import Recordthreeimage from "../../assets/recordthree.svg";
import Recordfourimage from "../../assets/recordfour.svg";
import Users from "../users/Users";
import UserImage from "../../assets/userone.svg";
import Usertwoimage from "../../assets/usertwo.svg";
import Userthree from "../../assets/userthree.svg";
import FooterPhone from "../footerPhone/FooterPhone";
import Footer from "../footer/Footer";
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <section className="section">
      <div className="container">
        <Navbar />
        <Header />
      </div>
      <img className="headerlength" src={HeaderLength} alt="Headerlength" />
      <div className="container">
        <About />
      </div>
      <Logo />
      <div className="container">
        <h1 className="blog-text">Blog</h1>
        <div className="blog-images">
          <Blog className="blog-image" blogImage={BlogImage} />
          <Blog className="blog-image" blogImage={BlogImagetwo} />
          <Blog className="blog-image" blogImage={BlogImagethree} />
        </div>
      </div>
      <div className="container">
        <div className="record-text">
          <h1 className="record-text-logo">
            Record Your Voice and Get Instant Feedback
          </h1>
          <div className="record-cards">
            <Record
              recordimage={Recordoneimage}
              recordtext="Monitor Your English Level"
              recordparagraph="Automated Spoken English Level Test evaluates your CEFR level with 95% accuracy. "
            />
            <Record
              recordimage={Recordtwoimage}
              recordtext="Prepare for the IELTS Speaking Test"
              recordparagraph="The IELTS Speaking Test Simulator instantly provides you with a band score and a detailed report. "
            />
            <Record
              recordimage={Recordthreeimage}
              recordtext="Impress in a Job Interview"
              recordparagraph="Mock-up interviews enable you to practice commonly asked questions and get instant feedback on your performance."
            />
            <Record
              recordimage={Recordfourimage}
              recordtext="Practice Your Spoken English Every Day"
              recordparagraph="With Daily Stories and Courses, you can practice every day to break through language barriers."
            />
          </div>
        </div>
      </div>
      <div id="users" className="users-card active">
        <div className="container">
          <div className="user-cards-text">
            <h1>What Our Users Have To Say</h1>
            <p>
              See what customers say about us and about this e-wallet, let's
              write here all your complaints
            </p>
          </div>
          <div className="users-cards">
            <Users
              UserImage={UserImage}
              username="Tasha Wijayanti"
              country="Curug"
              userparagraph="Being an e-wallet vendor has been great. support is always responsive and helpful best of all I've been able to help many new e-wallet is very innovative for the apps"
            />
            <Users
              UserImage={Usertwoimage}
              username="Sizuka engkol"
              country="Indonesia"
              userparagraph="Sakuku help me to manage all types of my finances, with my pocket I can transfer and send money easily, everywhere and everywhere very useful good job"
            />
            <Users
              UserImage={Userthree}
              username="Gundam gandim"
              country="Bulgarian"
              userparagraph="I'm not kidding, this is really good and also very worth it to try and very helpful for financial problems and saving money for future thank you Sakuku"
            />
          </div>
        </div>
      </div>
      <div className="container">
        {/* <FooterPhone /> */}
        <Footer />
      </div>
    </section>
  );
}

export default App;
