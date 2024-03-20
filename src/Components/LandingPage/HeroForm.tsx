import { useContext, useState } from "react";

import Api from "../../lib/api";
import { Database } from "../../lib/firebase";
import { AuthContext } from "../../Providers/AuthProvider";

export default function HeroForm() {
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  // const [alias, setAlias] = useState<string | null>(null);
  const [longURL, setLongURL] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    await Api.instance.shorten
      .shortenLink({
        domain: "bit.ly",
        long_url: longURL!,
        group_guid: "o_4s940fcbn2",
      })
      .then(async ({ data }) => {
        setShortUrl(data.link);
        await Database.instance.saveLinkToHistories(user!.uid, data);
      })
      .finally(() => setIsLoading(false));
  };

  const onBack = () => {
    setShortUrl(null);
    setLongURL(null);
    setIsLoading(false);
  };

  return (
    <section id="formPricing">
      {shortUrl === null ? (
        <form onSubmit={onSubmit}>
          <div className="form">
            <input
              type="text"
              placeholder="Paste URLs here..."
              onChange={(event) => {
                const value = event.target.value;
                setLongURL(value);
              }}
            />
            {/* <input
              type="text"
              placeholder="Type Alias here."
              onChange={(event) => {
                const value = event.target.value;
                setAlias(value);
              }}
            /> */}
            <button className="formbtn" disabled={isLoading}>
              {isLoading ? (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    border: "3px solid #fff",
                    borderTopColor: "rgba(255,255,255,0.5)",
                    borderRadius: "100px",
                  }}
                  className="animate__spin"
                />
              ) : (
                <span>Trim URL</span>
              )}
            </button>

            <p>
              By clicking TrimURL, I agree to the <b>Terms of Service</b>,{" "}
              <br />
              <b>Privacy Policy</b> and Use of Cookies.
            </p>
          </div>
        </form>
      ) : (
        <div className="form111_con">
          <div className="form111">
            <div className="form213">
              <label>Your long URL</label>
              <input type="text" value={longURL!} disabled />
            </div>
            <div className="Form321">
              <label>Tiny URL</label>
              <input type="text" value={shortUrl!} disabled />
            </div>
            <div>
              <button className="Formbtnn" onClick={onBack}>
                Generate new Link
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
