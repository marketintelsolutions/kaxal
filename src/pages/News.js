import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/images/news.png'
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { fetchPosts, initFacebookSdk } from '../facebook';
import { FacebookEmbed } from 'react-social-media-embed';

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
            {/* <h2>- LATEST -</h2> */}
            <h2>Get latest news and update from our social platforms</h2>
            <div className='content'>
                <div className="section-two">

                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="KaxalAfrica"  // Replace with the username of the desired profile (without the '@')
                        options={{ height: 400, width: 540 }}  // Adjust height or other options as needed
                    />
                </div>
                {/* <div className='line'></div> */}
                <div className="section-three">
                    {/* <FacebookEmbed url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kqT7rg2WTjXdZPmSS8H533vEESYB1TAamRmxq5Cwrf1yKnW8XyV6qd6aSmdHXW3Yl%26id%3D100087465067889&show_text=true&width=500&preview=comet_preview"
                        width={504}
                        height={592}
                    /> */}
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kqT7rg2WTjXdZPmSS8H533vEESYB1TAamRmxq5Cwrf1yKnW8XyV6qd6aSmdHXW3Yl%26id%3D100087465067889&show_text=true&width=500&preview=comet_preview" style={{ border: 'none', overflow: 'hidden' }} width="500" height="600" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    {/* <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100087465067889&tabs=timeline&width=1000&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="500"
                        height="400"
                        style={{ border: 'none' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe> */}
                </div>
            </div>
        </section>
    )
}

export default News