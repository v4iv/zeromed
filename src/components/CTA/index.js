import React from 'react'
import PropTypes from 'prop-types'

const CTA = ({cta}) => (
    <section className="hero is-info">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                    {cta.heading}
                </h1>
                <h2 className="subtitle">
                    {cta.subheading}
                </h2>
            </div>
        </div>
    </section>
)

CTA.propTypes = {
    cta: PropTypes.shape({
        heading: PropTypes.string,
        subheading: PropTypes.string,
    }),
}


export default CTA