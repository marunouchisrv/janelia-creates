import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./HomePage.css"
import Janelia from "../Images/image 1.png"
import homeTop from "../Images/image 3.png"
import homeBottom from "../Images/image 4.png"
import Twitter from "../Images/Logo-2.png"

export default function HomePage() {

    const [rotate1, setRotate1] = useState("rotate(0deg)");
    const [rotate2, setRotate2] = useState("rotate(0deg)");
    const [rotate3, setRotate3] = useState("rotate(0deg)");
    const [rotate4, setRotate4] = useState("rotate(0deg)");
    const styles1 = {
        transform: rotate1
    };
    const styles2 = {
        transform: rotate2
    };
    const styles3 = {
        transform: rotate3
    };
    const styles4 = {
        transform: rotate4
    };

    let navigate = useNavigate();



  return (
    <div className="HomePage">

      <div className="home-top-image">
        <img src={homeTop} alt="paint on top" />
      </div>

      <div className="Welcome">
          <div className="home-text">   
            <h1>hi, my name is janelia</h1>
            <p>I’m a designer & illustrator who enjoys making cute things. Things I make include: emotes, stream assets, vtubers, and character art. If you are interested in what I do or would like to commission me, please take a look at the links below.</p>
            <div className="commission-status">
                <h6>COMMISSION STATUS</h6>
                <h5> WAITLISTED</h5>
            </div>
            <div className="navigation-buttons-homepage">


                
                    <button style={styles1}
                    onMouseEnter={() => setRotate1("rotate(-15deg)")}
                    onMouseLeave={() => setRotate1("rotate(0deg)")}
                    onClick={() => {
                        let path=`/gallery`
                        navigate(path);
                    }}
                    type="button">
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
            <div className="hidden-backgrounds-homepage">
                <div className="bg1">

                </div>
                <div className="bg2">

                </div>
                <div className="bg3">

                </div>
                <div className="bg4">

                </div>
            </div>

            <div className="social-media">
                <a href="http://twitter.com/itsjanelia" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="twitter" />
                </a>
                <a href="http://twitch.tv/itsjanelia" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3_194)">
                        <path d="M17.7981 10.2143L14.6097 13.3571H11.4213L8.63147 16.1071V13.3571H5.04451V1.57141H17.7981V10.2143Z" fill="white"/>
                        <path d="M4.24741 0L0.261902 3.92857V18.0714H5.04451V22L9.03002 18.0714H12.2184L19.3923 11V0H4.24741ZM17.7981 10.2143L14.6097 13.3571H11.4213L8.63147 16.1071V13.3571H5.04451V1.57143H17.7981V10.2143Z" fill="#C29BEA"/>
                        <path d="M15.4068 4.32141H13.8126V9.0357H15.4068V4.32141Z" fill="#C29BEA"/>
                        <path d="M11.0228 4.32141H9.42857V9.0357H11.0228V4.32141Z" fill="#C29BEA"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_3_194">
                        <rect width="19.1304" height="22" fill="white" transform="translate(0.261902)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="http://www.ko-fi.com/janelia" target="_blank" rel="noopener noreferrer">
                    <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_210_229)">
                        <path d="M28.2442 6.4525C27.8883 4.53644 26.8941 2.95018 25.3688 1.86524C24.1124 0.971964 22.6177 0.5 21.0461 0.5H2.42704C1.18423 0.5 0.40691 1.59473 0.399001 2.60887C0.399001 2.64916 0.399566 2.79478 0.400131 2.83104C0.399001 3.10616 0.370755 11.331 0.427812 15.7191L0.430071 15.7818C0.529496 17.2795 1.27236 18.4421 2.52139 19.0562C3.40039 19.4879 4.24099 19.5012 4.33815 19.5012C4.42289 19.5012 12.8831 19.4753 16.9132 19.4499C17.2041 19.4482 17.4848 19.4131 17.7475 19.3463C19.0943 19.0027 20.0976 18.1704 20.6484 16.9382C20.8585 16.4673 21.002 15.9419 21.0777 15.3669C23.3391 15.2345 25.3417 14.3095 26.6856 12.7469C28.1318 11.0657 28.6848 8.83074 28.2431 6.45365L28.2442 6.4525ZM24.9869 11.2285C23.8831 12.5115 22.0912 13.1814 20.0722 13.0675L18.8548 12.9984L18.8802 14.2405C18.8943 14.9392 18.7977 15.5251 18.5932 15.9827C18.3266 16.5784 17.8842 16.937 17.2001 17.1114C17.1114 17.1338 17.0109 17.1459 16.9002 17.1465C12.9294 17.1718 4.64885 17.1966 4.3438 17.1977C4.302 17.196 3.86588 17.1753 3.45349 16.956C2.97953 16.7039 2.73549 16.2901 2.68747 15.6546C2.63098 11.2245 2.66035 2.9168 2.66092 2.83277V2.80226H21.0461C22.1533 2.80226 23.2007 3.13091 24.0751 3.7531C25.1208 4.49673 25.7761 5.54944 26.0235 6.88072C26.3331 8.54698 25.9648 10.0912 24.9869 11.2285Z" fill="#EAA1C8"/>
                        <path d="M14.505 5.79463C12.4657 4.90078 10.7879 6.84619 10.7879 6.84619C9.33324 5.21562 7.1312 5.2985 6.11266 6.40186C5.09412 7.50522 5.45002 9.39883 6.20983 10.4527C6.92331 11.4421 10.058 14.2888 10.5331 14.77C10.5331 14.77 10.5676 14.8068 10.6489 14.8684C10.8512 14.972 10.9811 14.8431 10.9811 14.8431C10.9811 14.8431 13.9446 12.0873 15.2795 10.5005C16.467 9.08054 16.5444 6.68849 14.505 5.79406V5.79463Z" fill="#EAA1C8"/>
                        <path d="M21.3168 4.84955H20.0932V11.0541C20.0932 11.0541 20.3841 11.0881 20.8321 11.0881C21.1304 11.0881 21.4981 11.0731 21.8958 11.0225C23.046 10.6426 24.1024 9.81956 24.1024 7.73026C24.1024 6.87554 23.8052 6.25681 23.4335 5.81707C22.9059 5.19259 22.1257 4.84955 21.3168 4.84955Z" fill="#EAA1C8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_210_229">
                        <rect width="28" height="19" fill="white" transform="translate(0.392334 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </a>


                <a href="mailto: itsjanelia.art@gmail.com">
                <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9203 0H3.16433C1.63433 0 0.392334 1.242 0.392334 2.772V15.228C0.392334 16.758 1.63433 18 3.16433 18H21.9203C23.4503 18 24.6923 16.758 24.6923 15.228V2.772C24.6923 1.242 23.4503 0 21.9203 0ZM3.65483 2.034C3.72233 1.8765 3.84383 1.8765 3.89333 1.8765H21.2813C21.3308 1.8765 21.4523 1.8765 21.5198 2.034C21.5873 2.1915 21.5063 2.277 21.4703 2.3175L16.5518 7.551C15.5708 6.759 14.1353 6.8085 13.2218 7.722L12.5423 8.4015L11.8628 7.722C10.9673 6.8265 9.56333 6.7635 8.58233 7.5105L3.70433 2.313C3.66833 2.277 3.58733 2.187 3.65483 2.0295V2.034ZM2.39033 14.5305C2.31383 14.6115 2.25083 14.6925 2.19233 14.778V3.2985C2.25083 3.384 2.31833 3.465 2.39033 3.546L7.54733 9.036L2.39033 14.526V14.5305ZM21.5153 16.047C21.4478 16.2045 21.3263 16.2045 21.2768 16.2045H3.89333C3.84383 16.2045 3.72233 16.2045 3.65483 16.047C3.58733 15.8895 3.66833 15.804 3.70433 15.7635L8.14583 11.0385C8.20433 11.115 8.25833 11.1915 8.32583 11.259L12.5423 15.093L16.7588 11.259C16.8443 11.1735 16.9118 11.079 16.9793 10.9845L21.4658 15.7635C21.5018 15.7995 21.5828 15.8895 21.5153 16.047ZM22.8878 14.67C22.8518 14.625 22.8203 14.5755 22.7753 14.535L17.6183 9.045L22.7753 3.555C22.8158 3.51 22.8473 3.465 22.8878 3.42V14.6745V14.67Z" fill="#7EC7B5"/>
                </svg>

                </a>


            </div>

          </div>

          <div className="WelcomeSplash">
            <img src={Janelia} alt="Janelia" />
          </div>
      </div>

      <div className="home-bottom-image">
        <img src={homeBottom} alt="paint on bottom" />
      </div>
    </div>
  )
}
