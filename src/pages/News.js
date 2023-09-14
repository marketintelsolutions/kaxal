import React from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/images/news.png'
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const News = () => {
    return (
        <section className='news'>
            <div className="section-one" style={{ backgroundImage: `url(${news})` }}>
                <div className="section-center">
                    <h2>News</h2>
                    <div className="link">
                        <Link to="/">home </Link>
                        <p> {" > News"}</p>
                    </div>
                </div>
            </div>
            <div className="section-two">
                <h2>- LATEST -</h2>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'igee_17' // Replace with the Twitter handle of the profile you want to display
                    }}
                    options={{
                        height: '400', // You can customize the height as needed
                        width: '100%'
                    }}
                />
            </div>
        </section>
    )
}

export default News