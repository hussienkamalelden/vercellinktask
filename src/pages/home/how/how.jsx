import React, { Component } from 'react';
import "./how_style.scss"
import Pin from "../../../assets/images/pin.png"
import Eye from "../../../assets/images/eye.png"
import Info from "../../../assets/images/info.png"
import Time from "../../../assets/images/time.png"
import Avatar from "../../../assets/images/avatar.png"
import Mobile from "../../../assets/images/mobile.png"
import Hand from "../../../assets/images/hand.png"

class How extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="how">
                    <div className="how_overlay"></div>
                    <div className="container">
                        <div className="how-holder">
                            <h2 className="how-main-title">How we have helped</h2>
                            <p className="how-main-subtitle">See how AI Foundation have promoted change locally and to the world</p>
                            <section className="how-helpers-holder">
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon helpers-icon-special" src={Pin} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Find place</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Eye} alt="helpers icon" />
                                        <h5 className="how-helpers-title">A'awen</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Info} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Omniyat</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Time} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Give Time</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Avatar} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Tofoula</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Mobile} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Fundraising</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                                {/* Start Helper */}
                                <div className="how-helpers-helper">
                                    <div className="how-helpers-helper-content">
                                        <img className="helpers-icon" src={Hand} alt="helpers icon" />
                                        <h5 className="how-helpers-title">Zakat</h5>
                                        <h3 className="how-helpers-sign">+</h3>
                                    </div>
                                </div>
                                {/* End Helper */}
                            </section>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default How;