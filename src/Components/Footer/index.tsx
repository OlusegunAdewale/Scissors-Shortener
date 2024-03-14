/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import "./Footer.css";

import Black from "../../assets/black.svg";
import Facebook from "../../assets/Facebook.svg";
import Feather from "../../assets/Feather.svg";
import Twitter from "../../assets/Twitter.svg";
import Linkedin from "../../assets/LinkedIn.svg";

export default function () {
  return (
       <footer id="Footer">
           <div className="socialIcon">
            <img src={Black} alt="" />
            <div className="Icons">
              <a href="#">
                <img src={Twitter} alt="" />
              </a>
              <a href="#">
                <img src={Feather} alt="" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#">
                <img src={Facebook} alt="" />
              </a>
            </div>
           </div>

           <div className="footer_list">
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Why Scissor ?</a></li>
                <li><a href="#">Scissor 101</a></li>
                <li><a href="#">Integrations & API</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Solutions</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">For Developers</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Products</a></li>
                <li><a href="#">Link Management</a></li>
                <li><a href="#">QR Codes</a></li>
                <li><a href="#">Link-in-bio</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Company</a></li>
                <li><a href="#">About Scissor</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Blog</a></li>
                <li><a href="#">Resource Library</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">App Connectors</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Trust Center</a></li>
                <li><a href="#">Browser Extension</a></li>
                <li><a href="#">Mobile App</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Features</a></li>
                <li><a href="#">Branded Links</a></li>
                <li><a href="#">Mobile Links</a></li>
                <li><a href="#">Campaign</a></li>
                <li><a href="#">Management &</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">QR Code generation</a></li>
              </ul>
            </div>
            <div className="footer_list1">
              <ul>
                <li className="MB"><a href="#">Legal</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Acceptable Use Policy</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>
           
           </div>
       </footer>
  );
}
