import React from "react";

function Hero() {
    const firstName = "Thet"
    const lastName = "Paing"
    return (
        <section className="hero">
            <img className="hero-logo" src="./grid.jpeg" alt=""/>
            <h1>Online Experience</h1>
            <p>Download now for free this Airbnb Logo transparent 
                PNG picture with no background. Use it in your 
                personal projects or share it as a cool sticker on 
                Tumblr, WhatsApp, Facebook Messenger, Wechat, 
                TikTok, Twitter or in other messaging apps.</p>

            <h1>Hello {firstName} {lastName}</h1>
            
        </section>
    )
}

export default Hero