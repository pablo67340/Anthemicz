import * as React from "react";
import Layout from "../components/Layout";
import "../scss/templates/reach-out.scss";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  componentDidMount = () => {
    
  }

  render() {
    return (
      <Layout hasNav={true} hasFooter={true}>

        <section className="section contact-bg">
          <div className="contact-holder">
            <div className="container contact-container">
              <div className="content">
                <h1>Coming Soon!</h1>
                <p>You will be able to listen to our song samples right here! Stay Tuned!</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
