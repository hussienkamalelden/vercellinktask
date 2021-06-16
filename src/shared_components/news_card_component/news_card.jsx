import React, { Component } from 'react';
import "./news_card_style.scss"
import { Link } from 'react-router-dom';

class NewsCard extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <article id={this.props.data.id} className="news-card col-xl-4 col-md-6 col-12">
                    <div className="news-card-holder">
                        <Link className="news-card-link" to={{ pathname: '/newsdetails', state: { id: this.props.data.id, data: this.props.data } }}>
                            <img className="news-card-image" src={this.props.data.urlToImage} alt="news card" /></Link>
                        <section className="news-card-content">
                            {/* Start Card Settings */}
                            <section className="news-card-setting">
                                {/* Start Favourite Settings */}
                                <div className="news-card-setting-fav">
                                    <i className={`setting-icon setting-fav-icon ${this.props.data.id} far fa-heart`} onClick={() => { this.props.favActivation(this.props.data.id) }}></i>
                                    <i className={`setting-icon setting-fav-icon-active ${this.props.data.id} fas fa-heart`} onClick={() => { this.props.favActivation(this.props.data.id) }}></i>
                                </div>
                                {/* End Favourite Settings */}

                                {/* Start Share Settings */}
                                <div className="news-card-setting-share">
                                    <i className="setting-icon setting-share-icon fas fa-share-alt" onClick={() => { this.props.shareToggle(this.props.data.id) }}></i>
                                    <div className={`setting-share-links-holder ${this.props.data.id}`}>
                                        <a className="setting-share-links" href="/#"><i className="setting-share-links-icon fab fa-facebook-f"></i></a>
                                        <a className="setting-share-links" href="/#"><i className="setting-share-links-icon fab fa-twitter"></i></a>
                                        <a className="setting-share-links" href="/#"><i className="setting-share-links-icon fas fa-envelope"></i></a>
                                    </div>
                                </div>
                                {/* End Share Settings */}
                            </section>
                            {/* End Card Settings */}

                            <Link className="news-card-link" to={{ pathname: '/newsdetails', state: { id: this.props.data.id, data: this.props.data } }}>
                                {/* Start Card Title */}
                                <h4 className="news-card-title">{this.props.data.title}</h4>
                                {/* End Card Title */}

                                {/* Start Card Tags */}
                                <section className="news-card-tags">
                                    <span className="card-tags">News</span>
                                    <span className="card-tags">Products</span>
                                </section>
                                {/* End Card Tags */}

                                {/* Start Card Paragraph */}
                                <p className="news-card-p">{this.props.data.content != null ? this.props.data.content : this.props.data.description}</p>
                                {/* End Card Paragraph */}

                                {/* Start Card Date */}
                                <section className="date-holder">
                                    <i className="date-icon far fa-calendar-alt"></i>
                                    <span className="date-text">{this.props.data.publishedAt}</span>
                                </section>
                                {/* End Card Date */}
                            </Link>
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default NewsCard;