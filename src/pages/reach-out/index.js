import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import anime from "animejs";
import "../../scss/templates/reach-out.scss";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z";
  wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
  wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
  wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

  componentDidMount = () => {
    anime({
      targets: '.wave-top > path',
      easing: 'linear',
      duration: 7500,
      loop: true,
      d: [
        { value: [this.wave1, this.wave2] },
        { value: this.wave3 },
        { value: this.wave4 },
        { value: this.wave1 },
      ],
    });
  }

  render() {
    return (
      <Layout hasNav={true} hasFooter={true}>

        <section className="section contact-bg">
          <div className="contact-holder">
            <div className="container contact-container">
              <div className="content">
                <h1>Reach Out</h1>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <div className="control">
                    <div className="columns is-multiline">
                      <div className="column is-half">
                        <div className="col-inner">
                        <input onChange={this.handleChange} name="First_Name" id="First_Name" className="input is-medium" type="text" placeholder="First Name" required={true} />
                        </div>
                      </div>
                      <div className="column is-half">
                        <div className="col-inner">
                        <input onChange={this.handleChange} name="Last_Name" id="Last_Name" className="input is-medium" type="text" placeholder="Last Name" required={true} />
                        </div>
                      </div>
                      <div className="column is-half">
                        <div className="col-inner">
                        <input onChange={this.handleChange} name="Email" id="Email" className="input is-medium" type="email" placeholder="Email" required={true} />
                        </div>
                      </div>
                      <div className="column is-half">
                        <div className="col-inner">
                        <input onChange={this.handleChange} name="Phone" id="Phone" className="input is-medium" type="phone" placeholder="Phone" required={true} />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium txt-addy"
                        type={"text"}
                        name={"Address"}
                        onChange={this.handleChange}
                        id={"Address"}
                        required={false}
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                        placeholder="Type your message here"
                      />
                    </div>
                  </div>
                  <div className="field button-holder">
                    <button className="button is-link" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <svg className="wave-top" width="100" viewBox="0 0 1200 250">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#0099FF" />
          </svg>
        </section>
      </Layout>
    );
  }
}
