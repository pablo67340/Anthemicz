import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout hasFooter={true} hasNav={true}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
