import "../css/HomePresentation.css";
import arrow from "../assets/button-down.png";
//@ts-ignore
import crowVideo from "../assets/home.mp4"
import { useEffect, useState } from "react";

export default function HomePresentation() {
  const [showButton, setShowButton] = useState(true)

  const handleButtonClick = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
    setShowButton(false)
  };

  useEffect(() => {
    const myVideo = document.getElementById('myVideo') as HTMLVideoElement;
    if (myVideo !== null) {
      const playPromise = myVideo.play();
    
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // El video comenzó a reproducirse
        }).catch(() => {
          // Si la reproducción automática falla, intenta reproducir tras una interacción del usuario
          document.body.addEventListener('click', () => {
            myVideo.play();
          }, { once: true });
        });
      }
    }
  }, []);

  return (
    <div className="videoBox">
      <video id="myVideo" src={crowVideo} autoPlay muted loop></video>
      <div className="layerContainer">
        <h1 unselectable="on" className="animate__animated animate__fadeIn" style={{animation: 'fadeIn 5.5s'}} >RUINA</h1>
      </div>
      <button className={` ${showButton === true ? "arrowButton" : "invisible" } animate__animated animate__fadeInRightBig`} onClick={handleButtonClick}>
        <img src={arrow} alt="Arrow"/>
      </button>
    </div>
  );
}