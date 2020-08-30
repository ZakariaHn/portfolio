import React from "react";
import WebDesignCard from "../components/servicesCards/webDesign";
import ResponisivnessCard from "../components/servicesCards/responsive";
import SeoCard from "../components/servicesCards/seo";
import WebArchCard from "../components/servicesCards/websiteArch";
import WebSupportCard from "../components/servicesCards/websiteSupport";
import WebHostingCard from "../components/servicesCards/websiteHosting";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="row-up">
        <WebDesignCard />
        <ResponisivnessCard />
        <WebArchCard />
      </div>
      <div className="row-down">
        <SeoCard />
        <WebSupportCard />
        <WebHostingCard />
      </div>
      <div className={"show_work-services-nav"}>
        <Link to="/work">WORK</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default ServicesPage;
