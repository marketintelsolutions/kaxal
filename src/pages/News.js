import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/images/news.png'
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { fetchPosts, initFacebookSdk } from '../facebook';

const News = () => {
    // const [posts, setPosts] = useState([]);

    // const handleLogin = () => {
    //     window.FB.login(function (response) {
    //         if (response.authResponse) {
    //             fetchUserPosts();
    //         } else {
    //             console.log('User cancelled login or did not fully authorize.');
    //         }
    //     }, { scope: 'user_posts' });
    // }

    // const fetchUserPosts = () => {
    //     window.FB.api('/me/posts', function (response) {
    //         if (response && !response.error) {
    //             setPosts(response.data);
    //         }
    //     });
    // }

    // =================================================
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     async function loadPosts() {
    //         try {
    //             await initFacebookSdk();
    //             const data = await fetchPosts();
    //             setPosts(data);
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    //         }
    //     }

    //     loadPosts();
    // }, []);

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
            <h2>- LATEST -</h2>
            <div className='content'>
                <div className="section-two">
                    {/* <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'igee_17' // Replace with the Twitter handle of the profile you want to display
                        }}
                        options={{
                            height: '400', // You can customize the height as needed
                            width: '100%'
                        }}
                    /> */}
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="igee_17"  // Replace with the username of the desired profile (without the '@')
                        options={{ height: 400, width: 440 }}  // Adjust height or other options as needed
                    />
                </div>
                <div className='line'></div>
                {/* <div className="section-three">
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
                </div> */}
                <div className="section-three">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAuthorDGRPage&tabs=timeline&width=440&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=322593000299324"
                        width="440"
                        height="400"
                        style={{ border: 'none' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default News