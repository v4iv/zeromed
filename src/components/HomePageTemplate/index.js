import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import CTA from '../CTA'

const HomePageTemplate = ({
                              meta_title,
                              meta_description,
                              title,
                              subtitle,
                              offerings,
                              cta_strip,
                          }) => (
    <div>
        <Helmet>
            <title>{meta_title}</title>
            <meta name='description' content={meta_description}/>
        </Helmet>
        <section className="hero is-large is-info is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <h2 className="subtitle">
                        {subtitle}
                    </h2>
                </div>
            </div>
        </section>
        <Offerings gridItems={offerings.blurbs}/>
        <CTA cta={cta_strip}/>
    </div>
)

HomePageTemplate.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    offerings: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    cta_strip: PropTypes.object,
}

export default HomePageTemplate