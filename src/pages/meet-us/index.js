import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

import "../../scss/templates/meet-us.scss";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="gradient-background-meet">
          <h1 className="has-text-weight-bold is-size-1 meet-title">
            Meet Us
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
