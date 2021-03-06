/**
 * Created by vaibhav on 9/4/18
 */
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "../assets/css/fontawesome-all.css";
import "../assets/sass/styles.sass";
import config from "../../data/config";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription}/>
        </Helmet>
        <div className="wrapper">
            <Navbar/>
            <div>{children()}</div>
            <Footer/>
            <Socials config={config}/>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper;
