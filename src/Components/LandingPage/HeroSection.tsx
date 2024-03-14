import { Link } from "react-router-dom";

import Frame from "../../assets/Frame 29546.svg";
import vector from "../../assets/Vector 2.svg";

export default function HeroSection() {
  return (
    <section id="Optimize">
      <div className="optimize_con">
        <div className="optimize_header">
          <h1>
            Optimize Your Online Experience with Our <br />
            Advanced <span>URL Shortening</span> Solution
          </h1>
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, 
            branded links, and domain customization options to reinforce your
            brand presence and 
            enhance user engagement.
          </p>
        </div>
        <div className="optimize_btns">
          <Link to="/sign-in" className="sign_up">
            Sign Up
          </Link>
          <button className="Learn_more">Learn more</button>
        </div>

        <div className="optimize_dowmImgs">
          <div className="frame_con">
            <img className="frame" src={Frame} alt="Frame" />
          </div>
          <div className="optimize_vector">
            <img className="vector" src={vector} alt="vector" />
          </div>
        </div>
      </div>
    </section>
  );
}
