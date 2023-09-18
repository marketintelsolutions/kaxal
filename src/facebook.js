const facebookAppId = '322593000299324';

export function initFacebookSdk() {
    return new Promise(resolve => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v18.0'
            });

            console.log('window :', window.FB.getLoginStatus(resolve));
            window.FB.getLoginStatus(async ({ status }) => {
                console.log('status', status);
                if (status === 'connected') {
                    resolve();
                } else {
                    window.FB.login(response => {
                        if (response.authResponse) {
                            resolve();
                        } else {
                            reject('User did not authenticate');
                        }
                    }, { scope: 'user_posts' });
                }
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}

export function fetchPosts() {
    return new Promise((resolve, reject) => {
        window.FB.api('/me/posts', (response) => {
            if (response && !response.error) {
                resolve(response.data);
            } else {
                reject(response.error);
            }
        });
    });
}
