import React from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/images/news.png'

const News = () => {
    return (
        <section>
            <div className="section-one" style={{ backgroundImage: `url(${news})` }}>
                <div className="section-center">
                    <h2>News</h2>
                    <div className="link">
                        <Link to="/">home </Link>
                        <p> {" > News"}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News