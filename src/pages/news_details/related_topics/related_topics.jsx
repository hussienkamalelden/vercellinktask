import React, { Component } from 'react';
import "./related_topics_style.scss";
import RelatedCard from './../../../shared_components/related_card_component/related_card';

class RelatedTopics extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="related-topics">
                    <div className="container">
                        <h2>Related Topics</h2>
                        <div className="row">
                            <RelatedCard />
                            <RelatedCard />
                            <RelatedCard />
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default RelatedTopics;