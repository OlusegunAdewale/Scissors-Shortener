import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./SignIn.css";
import shape from "../../assets/ic_google.svg";
import apple from "../../assets/Path.svg";
import FirebaseAuth from "../../lib/firebase/auth";

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <>
      <div className="signup">
        <div className="SignUpCon">
          <div className="signUpWith">
            <small>Sign Up With</small>
            <div className="SignUpBtn">
              <button
                className="signupBtnText"
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
                className="signupBtnText"
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
              if (username && email && password)
                await toast
                  .promise(
                    FirebaseAuth.instance
                      .createUserWithEmailAndPassword(email, password)
                      .then(() => {
                        if (!location.pathname.includes("my-url"))
                          navigate("/");
                      }),
                    {
                      pending: "Creating user...",
                      success: "User created.",
                      error: "Failed to create user",
                    }
                  )
                  .finally(() => setIsLoading(false));
              else {
                setIsLoading(false);
                toast.error("Please fill in all fields.");
              }
            }}
          >
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                const value = event.target.value;
                setUsername(value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                const value = event.target.value;
                setPassword(value);
              }}
            />
            <button disabled={isLoading}>Sign up with Email</button>
          </form>

          <div className="signupTerms">
            <p>
              Already have an account?
              <Link to={"/login"} style={{ color: "blue" }}>
                Log in
              </Link>
            </p>
            <div className="signterms2">
              <article>
                By signing up, you agree to <br />
                Sciccor's <strong>
                  Terms of Service, Privacy Policy
                </strong> and <strong>Acceptable Use Policy.</strong>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
