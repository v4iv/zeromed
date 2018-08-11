import React from "react";
import PropTypes from "prop-types";
import Content from "../Content";


const AboutPageTemplate = ({title, content, image, contentComponent}) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <section className="hero is-large is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {title}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <img src={image} alt={title} className="image is-full" style={{width: "100%"}}/>
                    <PageContent className="content" content={content}/>
                </div>
            </section>
        </div>
    )
}

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    image: PropTypes.string,
    contentComponent: PropTypes.func,
}

export default AboutPageTemplate