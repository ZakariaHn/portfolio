import React, { Fragment } from "react";
import WebDesignCard from "../components/servicesCards/webDesign";
import ResponisivnessCard from "../components/servicesCards/responsive";
import SeoCard from "../components/servicesCards/seo";
import WebArchCard from "../components/servicesCards/websiteArch";
import WebSupportCard from "../components/servicesCards/websiteSupport";
import WebHostingCard from "../components/servicesCards/websiteHosting";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="row-up">
        <WebDesignCard />
        <ResponisivnessCard />
        <SeoCard />
      </div>
      <div className="row-down">
        <WebArchCard />
        <WebSupportCard />
        <WebHostingCard />
      </div>
    </div>
  );
};

export default ServicesPage;
