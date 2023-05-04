import React, {useState} from 'react'
import "./TOS.css"
import "../Data/images.js"
import TOSTop from "../Images/purple tear.png"
import TOSBottom from "../Images/portfolio images/background/corner-bottom-blue.png"


export default function TOS() {
  
    const [rotate1, setRotate1] = useState("rotate(0deg)");
    const [rotate2, setRotate2] = useState("rotate(0deg)");
    
    const [rotate4, setRotate4] = useState("rotate(0deg)");
    const [rotate5, setRotate5] = useState("rotate(0deg)")
    const styles1 = {
        transform: rotate1
    };
    const styles2 = {
        transform: rotate2
    };
    const styles4 = {
        transform: rotate4
    };
    const styles5 = {
        transform: rotate5
    };


  return (
    <div className="TOS-main">

      <div className="TOS-top-image">
        <img src={TOSTop} alt="paint on top" />
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

                <form action="/pricing">
                    <button style={styles2}
                    onMouseEnter={() => setRotate2("rotate(15deg)")}
                    onMouseLeave={() => setRotate2("rotate(0deg)")}>
                        <h5>PRICING</h5>
                    </button>
                </form>

                <form action="/TOS#top">
                    <div className="current-page">
                        <button>
                            <div className="TOS-green-font">
                                <h5>TOS</h5>
                            </div>
                        </button>
                    </div>
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

            <div className="TOS-text" id="top">
                <h1>terms of service</h1>
                <p>Please take the time to read and agree to the following terms before commissioning me. Thank you!</p>

                <div className="TOS-block">
                    <h5>CONTENT</h5>
                    <p>I, the artist, warrant that the work will be my original work performed to the best of my ability. I have the right to refuse projects and requests according to my discernment and capabilities. Some content that I would not be comfortable with representing include:</p>
                    <ul>
                        <li>Mecha/robotic</li>
                        <li>Furries</li>
                        <li>NSFW</li>
                        <li>Excessive gore/violence</li>
                        <li>Detailed backgrounds</li>
                    </ul>
                </div>

                <div className="TOS-block">
                    <h5>TIMELINE & PROCESS</h5>
                    <p>The completion of work will be dependent on the commission type and workload of commissions. It may typically average from 2 weeks to 3 months. Deadlines and timelines will be adhered to in good faith but may not be possible due to extenuating circumstances. Note that each project my vary. Please plan your launches and streams accordingly.</p>

                    <p>There may be 2 major revisions for each item shown during the process, not including mistakes made by the artist. Revision later in the process, such as after line art, can only be minor. I will actively reach out for feedback. Additional charge may be required for further revisions that may impact the timeline of the project.</p>

                    <p>Delivery of finished work will be through Google Drive.</p>
                </div>

                <div className="TOS-block">
                    <h5>COMMUNICATION</h5>
                    <p>Communication will take place throughout the entire project timeline with updates and bouncing ideas. I will typically ask for feedback when I have something to show. I will let you know if anything is causing delays or priority shifts in the project.</p>

                    <p>I will use Twitter/Discord DMs and track status updates on Trello to facilitate communication. I will usually respond quickly but may also take up to one week to provide a better, more concrete update.</p>

                    <p>Clients agree to provide all required art references, information and assets before work begins and during the process, otherwise the timeline may be affected.</p>
                </div>

                <div className="TOS-block">
                    <h5>RIGHTS, USAGE & CREDITS</h5>
                    <p>I retain original copyright and ownership of the work, which includes but may not be limited to: redistributing, reproducing, advertising, display the work on my websites, social media and portfolios, according to my discretion. I have the rights to repurpose unused process work for future projects, personal or otherwise.</p>

                    <p>The process will likely be posted on Twitter and/or streamed on Twitch unless clients request otherwise before project begins. A NDA or confidential commission status may be subject to a 25% fee.</p>

                    <p>Clients are granted exclusive rights for personal use of the work produced as agreed upon, which must not be transferred to any other parties. Personal use includes: social media profile pictures, signatures, layouts, themes, wallpapers, personal website display, social media posts, physical prints and products that are not for sale or distribution to any other party.</p>

                    <p>Clients may not at any time modify, edit, or change the work without permission from the artist.</p>

                    <p>Unless specified in the commission information or otherwise discussed and agreed upon, commercial licenses and reselling rights are not included. Commercial means any monetized work including, but not exclusive to: merchandise, monetized videos, music releases; and reselling rights means selling the work to another party or another platform.</p>

                    <p>Any work done or made available to the client must not be used for AI (Artificial Intelligence, Machine Learning, AI/ML training, NFT, blockchain, or any for profit platforms or purposes). Such usage is completely prohibited and may result in legal action taken.</p>

                    <p>Commercial licenses require additional charges of 100% on a case-by-case basis, as listed in the commission information.</p>

                    <p>Clients may not claim the work as their own or anyone else’s and therefore must credit me as the artist using my social tag (@itsjanelia).</p>
                </div>

                <div className="TOS-block">
                    <h5>PAYMENTS, CANCELLATION & REFUNDS</h5>
                    <p>Before starting the project, the client provides a 50% downpayment with the remaining 50% due at first complete watermarked preview before final revisions or delivery.</p>

                    <p>Invoices will be sent when work is ready to begin within a reasonable amount of time, not during waitlist or consultation process. Do not send a payment without my request.</p>

                    <p>All payments are done through PayPal. When invoice or payment link is received, the client agrees to pay within 72 hours unless circumstances are communicated otherwise in advance, or the project/waitlist position may be cancelled by the artist.</p>

                    <p>Client must request cancellation before payment is received. Refunds will not be granted if cancellation is requested after payment has been received.</p>
                </div>
                <div className="TOS-agree">
                    <p>Commissioning me means that you have read and agreed to the terms of service.</p>
                </div>
            </div>




            <div className="TOS-bottom-image">
                <img src={TOSBottom} alt="paint on bottom" />
            </div>
      
    </div>
  )
}
