import React, { Component } from 'react';
import "./news_holder_style.scss";
import NewsCard from '../../../shared_components/news_card_component/news_card';

class NewsHolder extends Component {
    state = {
        articlesArr: this.props.data
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
                <article className="news-holder">
                    <div className="news-holder-holder">
                        <div className="container">
                            <div className="row">
                                {this.props.data.map((data, index) => {
                                    return index < 12 ?
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

export default NewsHolder;