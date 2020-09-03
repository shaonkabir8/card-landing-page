import React from "react";
import Layout from "./Layout";
import Card from "./Card";
import Footer from "./Footer";

const app = () => (
  <React.Fragment>
    <Layout>
      <Card />
    </Layout>
    <Footer />
  </React.Fragment>
);

export default app;
