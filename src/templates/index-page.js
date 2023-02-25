import React from "react";
import "../scss/templates/index.scss";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const IndexPageTemplate = () => {

  return (
    <div>
      
    </div>
  );
};

const IndexPage = () => {

  return (
    <Layout hasFooter={true} hasNav={true}>
      <IndexPageTemplate/>
    </Layout>
  );
};

export default IndexPage;
