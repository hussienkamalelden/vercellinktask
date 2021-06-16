import React, { Component } from 'react';
import "./latestnews_style.scss"
import NewsCard from '../../../shared_components/news_card_component/news_card';
import NewsApi from '../../../newsapi.json';
import { Link } from "react-router-dom";

class LatestNews extends Component {
    state = {
        articlesArr: NewsApi.articles
    }

    // onclick Share Toggle ..
    shareToggle = (id) => {
        let shareIconHolder = document.querySelectorAll('.setting-share-links-holder')
        let elem;
        for (let index = 0; index < shareIconHolder.length; index++) {
            if (shareIconHolder[index].classList.contains(id) === true) {
                elem = shareIconHolder[index];
            }
        }
        // console.log(elem);
        elem.classList.toggle('setting-share-links-holder-active');
    }
    // Start Favourite Activation ..
    favActivation = (id) => {
        let favIconDeactivate = document.querySelectorAll(".setting-fav-icon");
        let favIconActivate = document.querySelectorAll(".setting-fav-icon-active");
        let elem;
        let elem2;
        for (let index = 0; index < favIconActivate.length; index++) {
            if (favIconActivate[index].classList.contains(id) === true) {
                elem = favIconActivate[index];
            }
        }
        for (let index = 0; index < favIconDeactivate.length; index++) {
            if (favIconDeactivate[index].classList.contains(id) === true) {
                elem2 = favIconDeactivate[index];
            }
        }
        if (window.getComputedStyle(elem).display === "none") {
            elem2.style.display = "none";
            elem.style.display = "inline-block";
        } else {
            elem.style.display = "none";
            elem2.style.display = "inline-block";
        }
    }

    render() {
        return (
            <React.Fragment>
                <article className="latestnews">
                    <div className="latestnews-holder">
                        <div className="container">
                            <section className="latestnews-header">
                                <h2 className="latestnews-header-title">LatestNews</h2>
                                <Link className="latestnews-header-viewall" to="/news">View All<span className="arrow-right"></span></Link>
                            </section>
                            <div className="row">
                                {this.state.articlesArr.map(data => {
                                    return data.showOnHomepage === true ?
                                        <NewsCard
                                            key={data.id}
                                            data={data}
                                            shareToggle={this.shareToggle}
                                            favActivation={this.favActivation} /> : '';

                                })}
                            </div>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default LatestNews;