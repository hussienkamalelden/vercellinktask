import React, { Component } from 'react';
import "./header_style.scss";
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="news-header">
                    <div className="container">
                        <div className="news-header-holder">
                            <Link className="news-header-holder-links" to="/">Home</Link>
                            <span className="news-header-holder-sign">{">"}</span>
                            <Link className="news-header-holder-links" to="/news">News</Link>
                        </div>
                        <h1 className="news-header-title">News</h1>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Header;