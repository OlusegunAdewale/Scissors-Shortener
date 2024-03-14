import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./LoginPage.css";
import shape from "../../assets/ic_google.svg";
import apple from "../../assets/Path.svg";
import FirebaseAuth from "../../lib/firebase/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <>
      <div id="loginForm">
        <div className="Login_con">
          <div className="LoginWith">
            <small>Login with</small>
            <div className="Loding_btn">
              <button
                className="buttonWithImageAndText"
                onClick={async () => {
                  setIsLoading(false);
                  await toast
                    .promise(
                      FirebaseAuth.instance.signInWithGoogle().then(() => {
                        if (!location.pathname.includes("my-url"))
                          navigate("/");
                      }),
                      {
                        pending: "Authenticating user...",
                        success: "User authenticated.",
                        error: "Failed to authenticate user",
                      }
                    )
                    .finally(() => setIsLoading(false));
                }}
                disabled={isLoading}
              >
                <img src={shape} alt="" />
                <span>Google</span>
              </button>

              <button
                className="buttonWithImageAndText"
                onClick={() => async () => {
                  setIsLoading(false);
                  await toast
                    .promise(
                      FirebaseAuth.instance.signInWithAppple().then(() => {
                        if (!location.pathname.includes("my-url"))
                          navigate("/");
                      }),
                      {
                        pending: "Authenticating user...",
                        success: "User authenticated.",
                        error: "Failed to authenticate user",
                      }
                    )
                    .finally(() => setIsLoading(false));
                }}
                disabled={isLoading}
              >
                <img src={apple} alt="" />
                <span>Apple</span>
              </button>
            </div>

            <div className="login_line">
              <div className="line"></div>
              <div className="lineOr">Or</div>
              <div className="line"></div>
            </div>
          </div>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              setIsLoading(true);
              if (email && password)
                await toast
                  .promise(
                    FirebaseAuth.instance
                      .signInWithEmailAndPassword(email, password)
                      .then(() => {
                        if (!location.pathname.includes("my-url"))
                          navigate("/");
                      }),
                    {
                      pending: "Authenticating user...",
                      success: "User authenticated.",
                      error: "Failed to authenticate user",
                    }
                  )
                  .finally(() => setIsLoading(false));
            }}
          >
            <input
              type="email"
              placeholder="Email address or username"
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => {
                const value = event.target.value;
                setPassword(value);
              }}
            />
            <button disabled={isLoading}>Log in</button>
          </form>

          <div className="signUp">
            <p>
              Don't have an account?{" "}
              <Link to={"/sign-in"} style={{ color: "blue" }}>
                Sign Up
              </Link>
            </p>
            <div className="signupTerms">
              <article>
                By signing in with an account, you agree to <br />
                Sciccor's <strong>Terms of Service, Privacy Policy</strong> and <strong>
                  Acceptable Use
                  Policy.
                </strong>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
