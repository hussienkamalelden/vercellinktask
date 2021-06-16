import React, { Component } from 'react';
import Slider from './slider/slider';
import LatestNews from './latest_news/latestnews';
import How from './how/how';

class Home extends Component {
    state = {}
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        return (
            <React.Fragment>
                <Slider />
                <LatestNews />
                <How />
            </React.Fragment>
        );
    }
}

export default Home;