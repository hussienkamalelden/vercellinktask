import React, { Component } from 'react';
import "./news_details_style.scss"
import Header from './header/header';
import Details from './details/details';
import RelatedTopics from './related_topics/related_topics';

class NewsDetails extends Component {
    state = {
        id: 1,
        data: {}
    }
    componentDidMount() {
        document.title = "News Details"
        //get data from link ..
        const { id, data } = this.props.location.state;
        //setState ..
        this.setState({ id, data })
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg-holder">
                    <Header />
                    <Details
                        id={this.state.id}
                        data={this.state.data}
                    />
                    <RelatedTopics />
                </div>
            </React.Fragment>
        );
    }
}

export default NewsDetails;