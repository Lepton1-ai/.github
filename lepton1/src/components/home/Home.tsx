import "./home.scss";
import CountUp from "react-countup";

const Header = () => {
  return (
    <section className="header_wrap">
      <div className="header_container">
        {/* left section */}
        <div className="header_left">
          <div className="header_title">
            <h1>
              Great Product is <br /> built by great teams
            </h1>
          </div>
          <div className="header_description">
            <span className="spanText">
              Take the first step towards unlocking your business's full
              potential. Contact us today,
            </span>
            <span className="spanText">
              and let's embark on a journey to transform your ideas into
              exceptional software
            </span>
            <span className="spanText">
              solutions that set you apart from the competition. Trust LEPTON 1
              to be your premier
            </span>
            <span className="spanText">
              outsourcing partner for custom software development. Your success
              is our priority.
            </span>
          </div>
          <div className="hire_dev">
            <button className="btn hire">
              <a href="#">Work With Us</a>
            </button>
          </div>
          
          <div  className="stats_section">
              <div className="first_stat">
                <span>
                  <CountUp end={10} duration={4} />
                  <span>+</span>
                </span>
                <span>Years of experience</span>
              </div>
              <div className="first_stat">
                <span>
                  <CountUp start={150} end={200} duration={4} />
                  <span>+</span>
                </span>
                <span>Successful Projects</span>
              </div>
              <div className="first_stat">
                <span>
                  <CountUp end={10} duration={4} />
                  <span>+</span>
                </span>
                <span>Dedicated Engineers</span>
              </div>
          </div>
          
        </div>
        {/* right section */}
        <div className="header_right">
          <div className="image_container">
            <img src="./header_img.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
