import React, {useState} from 'react'
import "./Pricing.css"
import "../Data/images.js"
import PricingTop from "../Images/pink.png"
import PricingBottom from "../Images/green tear.png"
import Emotes from "../Images/Frame 3.png"
import animEmotes from "../Images/animemotes.png"
import charIcons from "../Images/charicons.png"
import twPanels from "../Images/twpanels.png"
import Chibi from "../Images/chibi.png"
import Vtuber from "../Images/vtuber.png"
import PNGTuber from "../Images/pngtuber.png"
import animEmote1 from "../Images/portfolio images/pricing/animated-emotes-1.gif"
import animEmote2 from "../Images/portfolio images/pricing/animated-emotes-2.gif"
import charIconGif from "../Images/portfolio images/pricing/character-icons.gif"

export default function Pricing() {
  
    const [rotate1, setRotate1] = useState("rotate(0deg)");
    
    const [rotate3, setRotate3] = useState("rotate(0deg)");
    const [rotate4, setRotate4] = useState("rotate(0deg)");
    const [rotate5, setRotate5] = useState("rotate(0deg)")
    const styles1 = {
        transform: rotate1
    };
    const styles3 = {
        transform: rotate3
    };
    const styles4 = {
        transform: rotate4
    };
    const styles5 = {
        transform: rotate5
    };


  return (
    <div className="Pricing-main">

      <div className="pricing-top-image">
        <img src={PricingTop} alt="paint on top" />
      </div>

        <div className="nav">


                <form action="/">
                    <button style={styles5}
                    onMouseEnter={() => setRotate5("rotate(15deg)")}
                    onMouseLeave={() => setRotate5("rotate(0deg)")}>
                        <h5>HOME</h5>
                    </button>
                </form>


                <form action="/gallery">
                    <button style={styles1}
                    onMouseEnter={() => setRotate1("rotate(-15deg)")}
                    onMouseLeave={() => setRotate1("rotate(0deg)")}>
                        <h5>GALLERY</h5>
                    </button>
                </form>

                <form action="/pricing#top">
                    <div className="current-page">
                        <button>
                            <div className="pricing-blue-font">
                                <h5>PRICING</h5>
                            </div>
                        </button>
                    </div>
                </form>

                <form action="/TOS">
                    <button style={styles3}
                    onMouseEnter={() => setRotate3("rotate(-15deg)")}
                    onMouseLeave={() => setRotate3("rotate(0deg)")}>
                        <h5>TOS</h5>
                    </button>
                </form>

                <form action="/request">
                    <button style={styles4}
                    onMouseEnter={() => setRotate4("rotate(15deg)")}
                    onMouseLeave={() => setRotate4("rotate(0deg)")}>
                        <h5>CONTACT</h5>
                    </button>
                </form>
            </div>
            <div className="hidden-backgrounds">
                <div className="bg5-hidden">

                </div>
                <div className="bg1-hidden">

                </div>
                <div className="bg2-hidden">

                </div>
                <div className="bg3-hidden">

                </div>
                <div className="bg4-hidden">

                </div>
            </div>

            <div className="pricing-frame" id="top">
                <h1>pricing</h1>
                <p>Please take the time to read the <a href="/TOS">Terms of Service</a> before contacting me for commissions.</p>
                <div className="pricing-item">
                    <img src={Emotes} alt="Emotes" />
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>EMOTES</h2>
                            <div className="price-actual">
                                <h5>$20 USD per emote</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes sizes: 300px, 112px, 56px, 28px</li>
                                <li>Complex designs will be simplified</li>
                                <li>Transparent PNG files will be delivered</li>
                            </ul>
                    </div>
                </div>

                <div className="pricing-item">
                    <div className="mobile-anim">
                        <img src={animEmotes} alt="Animated Emotes" />
                    </div>
                    <div className="animated-emotes">
                        <img src={animEmote1} alt="Animated Emote 1" />
                        <img src={animEmote2} alt="Animated Emote 2" />
                    </div>
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>ANIMATED EMOTES</h2>
                            <div className="price-actual">
                                <h5>$40+ USD per emote</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes sizes: 300px, 112px, 56px, 28px</li>
                                <li>Price may very depending on the complexity of the animation and design</li>
                                <li>I do not animate emotes made by other artists</li>
                            </ul>
                    </div>
                </div>

                <div className="pricing-item">
                    <div className="mobile-anim">
                        <img src={charIcons} alt="Icons" />
                    </div>
                    <div className="animated-charicons">
                        <img src={charIconGif} alt="Animated character icons" />
                    </div>
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>CHARACTER ICONS</h2>
                            <div className="price-actual">
                                <h5>$25 USD per icon</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes size: 400px</li>
                                <li>Character 2 frame talking animation + non talking version</li>
                                <li>Complex designs will be simplified </li>
                                <li>Transparent PNG filed will be delivered</li>
                            </ul>
                    </div>
                </div>

                <div className="pricing-item">
                    <img src={twPanels} alt="Twitch Panels" />
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>TWITCH PANELS</h2>
                            <div className="price-actual">
                                <h5>$35 USD per panel</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes size: 400px</li>
                                <li>Character drawing only</li>
                                <li>Panel design + $10 per panel</li>
                                <li>Transparent PNG files will be delivered</li>
                            </ul>
                    </div>
                </div>

                <div className="pricing-item">
                    <img src={Chibi} alt="Full Body Chibi" />
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>FULL BODY CHIBI</h2>
                            <div className="price-actual">
                                <h5>$50+ USD</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes size: 1000px</li>
                                <li>Price may vary depending on the complexity of the character design</li>
                                <li>Additional character/pets +70%</li>
                                <li>Transparent PNG files will be delivered</li>
                                <li>For personal use only</li>
                            </ul>
                    </div>
                </div>
                <div className="pricing-item">
                    <img src={PNGTuber} alt="PNGTUBER" />
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>PNGTUBER</h2>
                            <div className="price-actual">
                                <h5>$50+ USD</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Includes pngtuber model (half body) + idle, blinking, talking expressions</li>
                                <li>Full body +$30</li>
                                <li>Additional expressions available at +$15 each</li>
                                <li>Live2D Animation +$100</li>
                                <li>Animated Expressions +$30 each</li>
                                <li>Props & Pets: price varies depending on complexity</li>
                            </ul>
                    </div>
                </div>
                <div className="pricing-item">
                    <img src={Vtuber} alt="VTUBER" />
                    <div className="pricing-breakdown">
                        <div className="pricing-category-text">
                            <h2>VTUBER</h2>
                            <div className="price-actual">
                                <h5>TBD</h5>
                            </div>
                            
                        </div>
                        <ul>
                                <li>Coming Soon!</li>
                            </ul>
                    </div>
                </div>
                <div className="extra-buttons">
                    <form action="/gallery">
                        <button><h5>GALLERY</h5></button>
                    </form>
                    <form action="/request">
                        <button><h5>REQUEST</h5></button>
                    </form>
                </div>
            </div>
        
            
            
            <div className="pricing-bottom-image">
                <img src={PricingBottom} alt="paint on bottom" />
            </div>
            
    </div>
  )
}
