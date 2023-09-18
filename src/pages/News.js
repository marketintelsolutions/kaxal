import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/images/news.png'
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { fetchPosts, initFacebookSdk } from '../facebook';

const News = () => {
    // const [posts, setPosts] = useState([]);

    const handleLogin = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                fetchUserPosts();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'user_posts' });
    }

    const fetchUserPosts = () => {
        window.FB.api('/me/posts', function (response) {
            if (response && !response.error) {
                setPosts(response.data);
            }
        });
    }

    // =================================================
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            try {
                await initFacebookSdk();
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        loadPosts();
    }, []);

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
            <div className="section-three">
                <button onClick={handleLogin}>Login with Facebook</button>
                <div>
                    {posts.map(post => (
                        <iframe
                            key={post.id}
                            src={`https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/post/${post.id}`}
                            width="500"
                            height="600"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameborder="0"
                            allowfullscreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    ))}
                </div>
            </div>
            <div>
                <h3>User Posts</h3>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.message}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default News