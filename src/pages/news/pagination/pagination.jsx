import React, { Component } from 'react';
import "./pagination_style.scss";

class Pagination extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="news-pagination">
                    <div className="container">
                        <section className="pagination-holder">
                            <h6 className="btn-box btn-box-prev btn-box-disabled" >{'<'}</h6>
                            <h6 className="btn-box btn-box-active">1</h6>
                            <h6 className="btn-box">2</h6>
                            <h6 className="btn-box">3</h6>
                            <h6 className="btn-box btn-box-next">{'>'}</h6>
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Pagination;