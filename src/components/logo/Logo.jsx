import "./logo.css";
import Cmimage from "../../assets/sm.svg";
import Tirtoimage from "../../assets/tirto.svg";
import Forbesimage from "../../assets/forbes.svg";
import Googleimage from "../../assets/google.svg";
import Theimage from "../../assets/the.svg";

const Logo = () => {
  return (
    <div className="logo-images">
      <div className="container">
        <div className="logo-img row">
          <img className="col-xl-2 col-md-4 col-sm-6 " src={Cmimage} alt="Cm" />
          <img className="col-xl-2 col-md-4 col-sm-6 "  src={Tirtoimage} alt="Tir" />
          <img className="col-xl-2 col-md-4 col-sm-4 " src={Forbesimage} alt="Forbes" />
          <img className="col-xl-2 col-md-4 col-sm-4 " src={Googleimage} alt="Google" />
          <img className="col-xl-2 col-md-4 col-sm-4 " src={Theimage} alt="The new york" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
