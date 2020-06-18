import React from 'react';

const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="three wide column">
                        <h4 className="ui inverted header">About</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">Sitemap</a>
                            <a href="#" className="item">Contact Us</a>
                            <a href="#" className="item">Religious Ceremonies</a>
                            <a href="#" className="item">Gazebo Plans</a>
                        </div>
                    </div>
                    <div class="three wide column">
                    <h4 class="ui inverted header">Services</h4>
                        <div class="ui inverted link list">
                            <a href="#" class="item">Banana Pre-Order</a>
                            <a href="#" class="item">DNA FAQ</a>
                            <a href="#" class="item">How To Access</a>
                            <a href="#" class="item">Favorite X-Men</a>
                        </div>
                    </div>
                    <div class="seven wide column">
                        <h4 class="ui inverted header">Footer Header</h4>
                        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;