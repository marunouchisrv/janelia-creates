import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Gallery.css"
import "../Data/images.js"
import GalleryTop from "../Images/portfolio images/background/corner-top-green.png"
import GalleryBottom from "../Images/portfolio images/background/corner-bottom-purple.png"
import Frame1 from "../Images/Frame 3.svg"
import Frame2 from "../Images/meteor.svg"
import Frame3 from "../Images/janelia.svg"
import Frame4 from "../Images/commissions.svg"
import charIcons from "../Images/charactericons.svg"
import streamAssets from "../Images/Streamassets.svg"
import charArt from "../Images/characterart.svg"
import Video1 from "../Images/portfolio images/gallery/stream assets/janelia-brb.mp4"
import Video2 from "../Images/portfolio images/gallery/stream assets/killas-brb.mp4"
import charIconMobile from "../Images/chariconmobile.svg"
import charArtMobile from "../Images/portfolio images/gallery/character art/janelia-art-1.png"
import charArtMobile2 from "../Images/portfolio images/gallery/character art/janelia-art-2.png"
import charArtMobile3 from "../Images/portfolio images/gallery/character art/killas-art-1.png"
import charArtMobile4 from "../Images/portfolio images/gallery/character art/killas-art-2.png"
import charArtMobile5 from "../Images/portfolio images/gallery/character art/killas-art-3.png"
import charArtMobile6 from "../Images/portfolio images/gallery/character art/killas-art-5.png"

export default function Gallery() {


    let navigate = useNavigate();
    
    const [rotate2, setRotate2] = useState("rotate(0deg)");
    const [rotate3, setRotate3] = useState("rotate(0deg)");
    const [rotate4, setRotate4] = useState("rotate(0deg)");
    const [rotate5, setRotate5] = useState("rotate(0deg)")
    const styles2 = {
        transform: rotate2
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
    <div className="Gallery-main">

      <div className="gallery-top-image">
        <img src={GalleryTop} alt="paint on top" />
      </div>

            <div className="nav">


                
                    <button style={styles5}
                    onMouseEnter={() => setRotate5("rotate(15deg)")}
                    onMouseLeave={() => setRotate5("rotate(0deg)")}
                    onClick={() => {
                        let path=`/`
                        navigate(path);
                    }}>
                        <h5>HOME</h5>
                    </button>
                


                
                    <div className="current-page">
                        <button>
                            <div className="gallery-pink-font">
                                <h5>GALLERY</h5>
                            </div>
                        </button>
                    </div>
                

                
                    <button style={styles2}
                    onMouseEnter={() => setRotate2("rotate(15deg)")}
                    onMouseLeave={() => setRotate2("rotate(0deg)")}
                    onClick={() => {
                        let path=`/pricing`
                        navigate(path);
                    }}>
                        <h5>PRICING</h5>
                    </button>
                

                
                    <button style={styles3}
                    onMouseEnter={() => setRotate3("rotate(-15deg)")}
                    onMouseLeave={() => setRotate3("rotate(0deg)")}
                    onClick={() => {
                        let path=`/TOS`
                        navigate(path);
                    }}>
                        <h5>TOS</h5>
                    </button>
                

                
                    <button style={styles4}
                    onMouseEnter={() => setRotate4("rotate(15deg)")}
                    onMouseLeave={() => setRotate4("rotate(0deg)")}
                    onClick={() => {
                        let path=`/request`
                        navigate(path);
                    }}>
                        <h5>REQUEST</h5>
                    </button>
                
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
        


            <div className="gallery-frame" id="top">
            <h1>gallery</h1>
            <h2>EMOTES</h2>
            <div className="emote-container">
                <div className="emotes">
                    <div className="emote-block">
                            <img src={Frame1} alt="ruri emotes" />
                    </div>
                    <div className="emote-block">
                        <img src={Frame2} alt="meteor emotes" />
                    </div>

                </div>
                <div className="emotes2">    
                    <div className="emote-block">
                        <img src={Frame3} alt="janelia OC emotes" />
                    </div>
                    <div className="emote-block">
                        <img src={Frame4} alt="commissioned emotes" />
                        
                    </div>

                </div>
            <h2>CHARACTER ICONS</h2>
            <div className="character-icons">
                <img src={charIcons} alt="character icons" />
            </div>
            <div className="character-icons-mobile">
                <img src={charIconMobile} alt="character icons mobile" />
            </div>
            <h2>STREAM ASSETS</h2>
            <div className="stream-assets">
                <img src={streamAssets} alt="stream assets" />
                <div className="animations">
                    <video width="370" height="207.56" autoPlay muted loop playsInline>
                        <source src={Video1} type="video/mp4" />
                    </video>
                    <video width="370" height="207.56" autoPlay muted loop playsInline>
                        <source src={Video2} type="video/mp4" />
                    </video>             
                </div>
            </div>
            <h2>CHARACTER ART</h2>
            <div className="character-art">
                <img src={charArt} alt="character art" />
            </div>
            <div className="character-art-mobile">
                <img src={charArtMobile} alt="mobile 1" />
                <img src={charArtMobile2} alt="mobile 2" />
                <img src={charArtMobile3} alt="mobile 3" />
                <img src={charArtMobile4} alt="mobile 4" />
                <img src={charArtMobile5} alt="mobile 5" />
                <img src={charArtMobile6} alt="mobile 6" />
            </div>
            </div>


            

        
        </div>    
        <div className="gallery-bottom-image">
                <img src={GalleryBottom} alt="paint on bottom" />
        </div>
      
    </div>
  )
}
