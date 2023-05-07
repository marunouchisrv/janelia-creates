import React, {useRef, useState} from 'react'
import { useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';
import "./Request.css"
import "../Data/images.js"
import RequestTop from "../Images/image 3.png"
import RequestBottom from "../Images/image 4.png"

export default function Request() {
    let navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    // const [message4, setMessage4] = useState("Select reference images to send");

    const handleChange = event => {
        setMessage(event.target.value);
      };
    const handleChange2 = event => {
        setMessage2(event.target.value);
      };
    const handleChange3 = event => {
        setMessage3(event.target.value);
      };
    /*const handleChange4 = event => {
        setMessage4(event.target.value)
    };    */
  
    const [rotate1, setRotate1] = useState("rotate(0deg)");
    const [rotate2, setRotate2] = useState("rotate(0deg)");
    const [rotate3, setRotate3] = useState("rotate(0deg)");
    
    const [rotate5, setRotate5] = useState("rotate(0deg)")
    const styles1 = {
        transform: rotate1
    };
    const styles2 = {
        transform: rotate2
    };
    const styles3 = {
        transform: rotate3
    };
   
    const styles5 = {
        transform: rotate5
    };

    const form = useRef();



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mjhb87n', 'template_v54pv1h', form.current, 'wopzxqh0ARpnWLOMt')
        .then((result) => {
            console.log(result.text);
            document.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className="Request-main">

      <div className="request-top-image">
        <img src={RequestTop} alt="paint on top" />
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
                


                    <button style={styles1}
                    onMouseEnter={() => setRotate1("rotate(-15deg)")}
                    onMouseLeave={() => setRotate1("rotate(0deg)")}
                    onClick={() => {
                        let path=`/gallery`
                        navigate(path);
                    }}>
                        <h5>GALLERY</h5>
                    </button>

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

                
                    <div className="current-page">
                        <button>
                            <div className="request-purple-font">
                                <h5>REQUEST</h5>
                            </div>
                        </button>
                    </div>
                
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
        <div className="content-contact" id="top">
        <h1>request</h1>
        <p>Please take the time to read the <a href="/TOS">Terms of Service</a> before contacting me for commissions.</p>
         

        <div className="contact">
            <h2>SERVICES</h2>
            <p>Select all the services you are interested in</p>   
      
            
            <div className="getintouch2">
                <form ref={form} onSubmit={sendEmail}  >
                <div className="services">
                    <h5>TWITCH ASSETS</h5>
                    <div className="service-options">
                        <label className="styled-option">
                            <input type="checkbox" id="emote" name="emote"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>EMOTE</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="animated_emote" name="animated_emote"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>ANIMATED EMOTE</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="badges" name="badges"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>BADGES</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="panels" name="panels"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>PANELS</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="alerts" name="alerts"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>ALERTS</h5>
                            </button>    
                        </label>
                    </div>
                    <h5>STREAMING SCREENS</h5>
                    <div className="service-options">
                        <label className="styled-option">
                            <input type="checkbox" id="be_right_back" name="be_right_back"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>BE RIGHT BACK</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="starting_soon" name="starting_soon"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>STARTING SOON</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="OFFLINE" name="offline"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>OFFLINE</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="transition" name="transition"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>TRANSITION</h5>
                            </button>    
                        </label>
                    </div>
                    <h5>CHARACTER ART</h5>
                    <div className="service-options">
                        <label className="styled-option">
                            <input type="checkbox" id="character_icon" name="character_icon"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>CHARACTER ICON</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="half_body_chibi" name="half_body_chibi"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>HALF BODY CHIBI</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="full_body_chibi" name="full_body_chibi"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>FULL BODY CHIBI</h5>
                            </button>    
                        </label>
                    </div>
                    <h5>STREAMING MODELS</h5>
                    <div className="service-options">
                        <label className="styled-option">
                            <input type="checkbox" id="pngtuber" name="pngtuber"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>PNGTUBER</h5>
                            </button>    
                        </label>
                        <label className="styled-option">
                            <input type="checkbox" id="vtuber" name="vtuber"/>               
                            <button type="button">
                                <div className="checkmark"></div>
                                <h5>VTUBER MODEL + RIGGING</h5>
                            </button>    
                        </label>
                    </div>
                </div>

                    <div className="textfield">
                        <label for="name">NAME / USERNAME</label>
                        <input type="text" id="name" name="from_name" value={message} placeholder="Enter your preferred name or username" onChange={handleChange} required />
                    </div>
                    <div className="textfield">
                        <label for="email">EMAIL ADDRESS</label>
                        <input type="text" id="email" name="from_email" value={message2} placeholder="Enter your email address" onChange={handleChange2} required />
                    </div>
                    <div className="textfield">
                        <label for="twitch">TWITCH CHANNEL (IF APPLICABLE) </label>
                        <input type="text" id="twitch" name="from_twitch" value={message3} placeholder="Enter your twitch channel" onChange={handleChange3}  />
                    </div>
                    {/*<div className="file-upload">
                        <label for="file">REFERENCE IMAGES</label>
                        <div className="real-file">
                                <input type="file" multiple="multiple" name="upload" onChange={handleChange4}></input>
                            </div>
                        <div className="dummy-file">
                            <input type="text" id="file-field" name="file-field" value={message4} />
                            
                            <button type="button">
                                <h5>CHOOSE FILES</h5>
                            </button>
                            
                        </div>
                          
                    </div>*/}
                <div className="message">
                    <label for="message">COMMISSION DETAILS</label>
                    <textarea className="message-input" name="message" placeholder="Please be sure to include expressions/poses/details about the character/etc."  ></textarea>
                </div>
                
                <div className="submit">
                    <div class="g-recaptcha" data-sitekey="6Ldb_-0lAAAAADc8KOggO1bUn0x4Bt-NYc_F3i29"></div>
                    <br/>
                    <button disabled={message==="" || message2===""} onClick={() => {alert("Email sent! You'll hear back from me soon!")}} type="submit"><h5>SEND REQUEST</h5></button>
                </div>
                </form>  
            </div>    
        </div>
        </div>

        <div className="request-bottom-image">
            <img src={RequestBottom} alt="paint on bottom" />
        </div>
    </div>  
    
  )
}
