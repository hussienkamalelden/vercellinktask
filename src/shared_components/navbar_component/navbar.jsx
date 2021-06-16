import React, { Component } from 'react';
import "./navbar_style.scss"
import logo from "../../assets/images/logo.png"
import profile_pic from "../../assets/images/profile_pic.png"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {}
    // onclick Menu Toggle ..
    menuToggle = () => {
        let menu = document.querySelector('.menu-icon')
        let dropdown = document.querySelector('.dropdown-slide')
        menu.classList.toggle('open');
        dropdown.classList.toggle('dropdown-tog');
    }
    // onclick Expand Main Search Bar ..
    expandSearch = () => {
        document.querySelector(".search").style.visibility = "visible";
        document.querySelector(".search").style.width = "85%";
        document.querySelector(".submit-overlay").style.display = "none";
        document.querySelector(".submit").style.backgroundColor = "#2d717b";
    }
    render() {
        return (
            <React.Fragment>
                <article className="nav-holder">
                    <section className="navbar fixed-top">
                        <div className="container">
                            <div className="holder">
                                <section className="nav-left">
                                    <div className="menu-icon" onClick={this.menuToggle}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <a className="main-logo" href="/#">
                                        <img src={logo} alt="link development logo" />
                                    </a>
                                </section>
                                <section className="nav-right">
                                    {/* Start Main Search Section */}
                                    <form className="main-search-box">
                                        <div className="submit-overlay" onClick={this.expandSearch}></div>
                                        <input className="submit inputs" type="submit" value="" />
                                        <input className="search inputs" type="search" name="search" placeholder="Search" required />
                                    </form>
                                    {/* End Main Search Section */}
                                    {/* Start Notifications Section */}
                                    <Dropdown className="notif-dropdown">
                                        <Dropdown.Toggle className="notif-dropdown-toggle" id="dropdown-basic">
                                            <div className="notif-dropdown-icon-active"></div>
                                            <i className="notif-dropdown-icon far fa-bell"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="notif-dropdown-menu">
                                            <span className="notif-dropdown-title">Recent Notifications</span>
                                            <Dropdown.Item className="notif-drop-item" href="/#/action-1">You have an upcoming appointment today! <span className="notif-item-highlight">Check-in Now</span></Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item className="notif-drop-item" href="/#/action-2">Rate your last service appointment</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item className="notif-drop-item" href="/#/action-3">Your payment request has been approved</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item className="notif-drop-item notif-drop-item-all" href="/#/action-3">All Notifications<span className="arrow-right"></span></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* End Notifications Section */}
                                    {/* Start User Account Section */}
                                    <div className="main-user-acc">
                                        <img className="profile-pic" src={profile_pic} alt="user" />
                                        <span className="username">User Name</span>
                                    </div>
                                    {/* End User Account Section */}
                                    {/* Start Setting Section */}
                                    <Dropdown className="setting-dropdown">
                                        <Dropdown.Toggle className="setting-dropdown-toggle" id="dropdown-basic">
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="setting-dropdown-menu">
                                            <span className="setting-dropdown-title">Language</span>
                                            <Dropdown.Item className="setting-drop-item" href="/#/action-1">English <i class="setting-drop-item-icon fas fa-check"></i></Dropdown.Item>
                                            <Dropdown.Item className="setting-drop-item" href="/#/action-2">اللغة العربية</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <span className="setting-dropdown-title">Font Size</span>
                                            <div className="setting-drop-fonts-holder">
                                                <Dropdown.Item className="setting-drop-item" href="/#/action-3">A</Dropdown.Item>
                                                <Dropdown.Item className="setting-drop-item" href="/#/action-4"><span className="setting-item-highlight">A</span></Dropdown.Item>
                                                <Dropdown.Item className="setting-drop-item" href="/#/action-5">A</Dropdown.Item>
                                            </div>
                                            <Dropdown.Divider />
                                            <span className="setting-dropdown-title">Account</span>
                                            <Dropdown.Item className="setting-drop-item" href="/#/action-6">Sign out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* End Setting Section */}
                                </section>
                            </div>
                            <section className="dropdown-slide">
                                <div className="dropdown-left">
                                    <div className="dropdown-media">
                                        <a className="social-links" href="/#"><i className="icons fab fa-twitter"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-facebook-f"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-linkedin-in"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-youtube"></i></a>
                                        <a className="social-links" href="/#"><i className="icons fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-right">
                                    {/* Start Top Section */}
                                    <div className="dropdown-right-top">
                                        <ul className="nav-dropdown-top-ul">
                                            <li className="nav-dropdown-top-li">
                                                <Link className="nav-dropdown-main-links nav-dropdown-links-active" to="/">Home</Link></li>
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links" href="/#">About us</a>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><a href="/#" className="nav-dropdown-main-sub-links">who are us</a></li>
                                                    <li className="nav-dropdown-top-sub-li"><a href="/#" className="nav-dropdown-main-sub-links">why us?</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-dropdown-top-li"><Link className="nav-dropdown-main-links" to="/news">News</Link>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><Link className="nav-dropdown-main-sub-links" to="/news">News</Link>
                                                    </li>
                                                    <li className="nav-dropdown-top-sub-li"><a href="/#" className="nav-dropdown-main-sub-links">Events</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links" href="/#">Careers</a>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><a href="/#" className="nav-dropdown-main-sub-links">Opportunities</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Top Section */}
                                    {/* Start Search Section */}
                                    <form className="search-box">
                                        <input className="search inputs" type="search" name="search" placeholder="Search" required />
                                        <input className="submit inputs" type="submit" value="" />
                                    </form>
                                    {/* End Search Section */}
                                    {/* Start Bottom Section */}
                                    <div className="dropdown-right-bottom">
                                        <ul className="nav-dropdown-bottom-ul">
                                            <li className="nav-dropdown-bottom-li"><a className="nav-dropdown-main-links" href="/#">Contact Us</a></li>
                                            <li className="nav-dropdown-bottom-li"><a className="nav-dropdown-main-links" href="/#">Site Map</a></li>
                                        </ul>
                                        <div className="user-acc">
                                            <img className="profile-pic" src={profile_pic} alt="user" />
                                            <span className="username">User Name</span>
                                        </div>
                                    </div>
                                    {/* End Bottom Section */}
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}

export default Navbar;