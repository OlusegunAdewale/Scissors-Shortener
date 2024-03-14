import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import FirebaseAuth from "../../lib/firebase/auth";
import { toast } from "react-toastify";

function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header id="Header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div
          className="menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="bx bx-menu"></i>
        </div>

        <nav>
          <ul className={showMenu ? "show" : ""}>
            {isLoggedIn && (
              <li className="Active">
                <Link to="/my-url">My URLs</Link>
              </li>
            )}
            <li>
              <a href="#Section2">Features</a>
            </li>
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </nav>

        <div className="btn">
          {isLoggedIn && user ? (
            <button
              className="Logout"
              onClick={async () => {
                await toast.promise(FirebaseAuth.instance.logout(), {
                  pending: "Logging user out",
                  success: "user logged out",
                  error: "Failed to log user out",
                });
              }}
            >
              log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn_1">Log in</button>
            </Link>
          )}
          <a href="#formPricing">
            <button className="btn_2">Try for free</button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
