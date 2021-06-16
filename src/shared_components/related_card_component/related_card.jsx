import React, { Component } from 'react';
import "./related_card_style.scss"

class RelatedCard extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <article className="related-card col-xl-4 col-md-6 col-12">
                    <div className="related-card-holder">
                        <section className="related-card-content-box">
                            <span className="related-title-box-label">Category</span>
                            <h3 className="related-title-box-title">Technology Development Seminar</h3>
                            <h6 className="related-card-view" to="/news">View Details<span className="arrow-right"></span></h6>
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default RelatedCard;