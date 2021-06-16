import React, { Component } from 'react';
import Filters from './filters/filters';
import Header from './header/header';
import NewsHolder from './news_holder/news_holder';
import Pagination from './pagination/pagination';
import "./news_style.scss"
import NewsApi from '../../newsapi.json';

class News extends Component {
    state = {
        articlesArr: NewsApi.articles,
        articlesFilter: NewsApi.articles
    }
    componentDidMount() {
        document.title = "News"
    }

    //Sort articles by titles (ascending)..
    sortAscending = () => {
        //Sort Array and setState new Array ..
        let oldArr = this.state.articlesFilter;
        let newArr = oldArr.sort((a, b) => a.title.localeCompare(b.title));
        this.setState({ articlesFilter: newArr });

        //Add Class Active to dropDown menu ..
        var element = document.getElementById("filters-sort-box-item-1");
        element.classList.add("filters-sort-box-item-active");
        var element2 = document.getElementById("filters-sort-box-item-2");
        element2.classList.remove("filters-sort-box-item-active");
    }
    //Sort articles by titles (descending)..
    sortDescending = () => {
        //Sort Array and setState new Array ..
        let oldArr = this.state.articlesFilter;
        let newArr = oldArr.reverse((a, b) => a.title.localeCompare(b.title));
        this.setState({ articlesFilter: newArr });

        //Add Class Active to dropDown menu ..
        var element = document.getElementById("filters-sort-box-item-2");
        element.classList.add("filters-sort-box-item-active");
        var element2 = document.getElementById("filters-sort-box-item-1");
        element2.classList.remove("filters-sort-box-item-active");
    }

    //Search in articles by titles ..
    search = (text) => {
        let oldArr = [...this.state.articlesArr];
        let newArr = oldArr.filter(da => {
            let title = da.title.toLowerCase();
            if (title.includes(text.toLowerCase())) {
                return da
            } else {
                return "";
            }
        })
        this.setState({ articlesFilter: newArr });
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg-holder">
                    <Header />
                    <Filters search={this.search} sortAscending={this.sortAscending} sortDescending={this.sortDescending} />
                    <NewsHolder data={this.state.articlesFilter} />
                    <Pagination />
                </div>
            </React.Fragment>
        );
    }
}

export default News;