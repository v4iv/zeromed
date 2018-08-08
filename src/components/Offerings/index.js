import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({gridItems}) => (
    <div className="offerings">
        {gridItems.map((item, id) => (
            <section key={id} className="section">
                <div className="columns is-center-mobile">
                    <div className="column is-one-third-tablet is-centered">
                        <img src={item.image}/>
                    </div>
                    <div className="column is-two-thirds-tablet">
                        <section className="section">
                            <div className="content">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        ))}
    </div>
)

Offerings.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
        })
    ),
}


export default Offerings