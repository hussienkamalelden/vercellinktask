import React, { Component } from 'react';
import "./details_style.scss";

class Details extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <article className="details">
                    <div className="container">
                        <section className="card-details-holder">
                            <img className="card-details-img" src={this.props.data.urlToImage} alt="news card" />
                            <section className="card-details-body">
                                <section className="card-details-title-box">
                                    <span className="details-title-box-label">Category Name</span>
                                    <h3 className="details-title-box-title">{this.props.data.title}</h3>
                                </section>
                                <p className="card-details-content">
                                    {this.props.data.content != null ? this.props.data.content : this.props.data.description}
                                </p>
                            </section>
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Details;