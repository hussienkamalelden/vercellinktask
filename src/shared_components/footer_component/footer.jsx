import React, { Component } from 'react';
import "./footer_style.scss";

class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="holder">
                        <div className="container">
                            <div className="row">
                                <section className="cols col1 col-lg-2 col-12">
                                    <ul className="ulist-box">
                                        <li className="litems"><a className="links" href="/#">News</a></li>
                                        <li className="litems"><a className="links" href="/#">Events</a></li>
                                        <li className="litems"><a className="links" href="/#">About</a></li>
                                        <li className="litems"><a className="links" href="/#">FAQs</a></li>
                                    </ul>
                                </section>
                                <section className="cols col2 col-lg-3 col-12">
                                    <ul className="ulist-box">
                                        <li className="litems"><a className="links" href="/#">Privacy Policy</a></li>
                                        <li className="litems"><a className="links" href="/#">Contact Us</a></li>
                                        <li className="litems"><a className="links" href="/#">Complains</a></li>
                                    </ul>
                                </section>
                                <section className="cols col3 col-lg-4 col-12">
                                    <span className="subscribe-title titles">Subscribe to Newsletter</span>
                                    <form className="subscribe-box">
                                        <input className="email inputs" type="email" name="email" placeholder="Email Address" required />
                                        <input className="submit inputs" type="submit" value="Subscribe" />
                                    </form>
                                </section>
                                <section className="cols col4 col-lg-3 col-12">
                                    <span className="follow-title titles">Follow us on</span>
                                    <div className="social-box">
                                        <a className="social-links" href="/#"><i className="icons fab fa-instagram"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-youtube"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-linkedin-in"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-facebook-f"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-twitter"></i></a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <section className="copyrights">
                        <span className="content">All rights reserved - Link Development Company © 2020</span>
                    </section>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;