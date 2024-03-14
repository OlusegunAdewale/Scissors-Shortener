import Line from "../../assets/Line 70.svg";

// eslint-disable-next-line react-refresh/only-export-components
export default function () {
  return (
    <section id="Pricing">
      <div className="pricing_header">
        <div className="flex_price">
          <img src={Line} alt="" />
          <h3>
            A <span>price perfect</span> for your needs.
          </h3>
        </div>

        <p>
          From catering for your personal, business, event, socials needs, you
          can <br /> be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="grid_price">
        <div className="gridImg gridImg1">
          <span>Basic</span> <br />
          <b>Free</b> <br />
          <small>Free plan for all users</small>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Unlimited URL Shortening</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Basic Link Analytics</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Customizable Short Links</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Standard Support</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Ad-supported</p>
          </div>
        </div>
        <div className="gridImg gridImg2">
          <span>Professional</span> <br />
          <b>$15/month</b> <br />
          <small>Ideal for business creators</small>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Enhanced Link Analytics</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Custom Branded Domains</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Advanced Link Customization</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Priority Support</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Ad-free Experience</p>
          </div>
        </div>

        <div className="gridImg gridImg3">
          <span>Teams</span> <br />
          <b>$25/month</b> <br />
          <small>Share with up to 10 users</small>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Team Collaboration</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>User Roles and Permissions</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Enhanced Security</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>API Access</p>
          </div>
          <div className="gridPrice_flex">
            <i className="bx bx-check-circle"></i>
            <p>Dedicated Account Manager</p>
          </div>
        </div>
      </div>

      <div className="price_btns">
        <button className="pricebtns1">Get custom pricing</button>
        <button className="pricebtns2">select pricing</button>
      </div>
    </section>
  );
}
