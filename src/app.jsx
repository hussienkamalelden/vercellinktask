import React, { Component } from 'react';
import Navbar from './shared_components/navbar_component/navbar';
import Footer from './shared_components/footer_component/footer';
import Home from './pages/home/home';
import News from './pages/news/news';
import NewsDetails from './pages/news_details/news_details';
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/newsdetails" component={NewsDetails} />
          <Route path="/news" component={News} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;