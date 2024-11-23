import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <a className="dtc v-mid mid-gray link dim w-25" href="http://tachyons.io" title="Home">
                    <img src="https://robohash.org/tt" className="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                <div className="dtc v-mid w-75 tr">
                    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="http://tachyons.io" title="About">Services</a>
                    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="http://tachyons.io" title="Store">Blog</a>
                    <a className="link dim dark-gray f6 f5-ns dib" href="http://tachyons.io" title="Contact">Join Us</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;