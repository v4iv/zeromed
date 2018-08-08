/**
 * Created by vaibhav on 9/4/18
 */
import React, {Component} from 'react'
import Link from 'gatsby-link'

class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        })
    }

    render() {
        return (
            <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <strong>ZeroMed</strong>&nbsp;|&nbsp;Image Glorified
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navMenu">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <Link className="navbar-item" to="/features">
                            Features
                        </Link>
                        <Link className="navbar-item" to="/about">
                            About
                        </Link>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link className="button is-info"
                                          to="/contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
