import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
// import logo from "./assets/img/logo.png"
import {logo,background,fog1,fog2,fog3,fog4,fog5,fog6,fog7,mountain1,mountain2,mountain3,mountain4,mountain5,mountain6,mountain7,mountain8,mountain9,mountain10,sunrays,blackshadow,hotel1,hotel2,hotel3} from "./assets/img/index.js";
// import shadows from "@mui/material/styles/shadows.js";

const ParallaxComponent = () => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);

  useEffect(() => {
    const parallaxEls = document.querySelectorAll(".parallax");

    function update(cursorPosition) {
      parallaxEls.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;

        el.style.transform = `translateX(calc(-50% + ${
          xValue * speedx
        }px)) rotateY(${
          rotateDegree * rotateSpeed
        }deg) translateY(calc(-50% + ${
          yValue * speedy
        }px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    }

    update(0);

    function handleMouseMove(e) {
      setXValue(e.clientX - window.innerWidth / 2);
      setYValue(e.clientY - window.innerHeight / 2);
      setRotateDegree((xValue / (window.innerWidth / 2)) * 20);

      update(e.clientX);
    }

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xValue, yValue, rotateDegree]);

  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="travelo" class="logo" />
          <ul>
            <li  className="mobilenone">
              <a href="https://github.com/karan0207/Animated-Travelweb">Login</a>
            </li>
            <li  className="mobilenone">
              <a href="https://github.com/karan0207/Animated-Travelweb">Sign up</a>
            </li>
            <li class="search mobilenone">
              <a href="https://github.com/karan0207/Animated-Travelweb">
                <SearchIcon />
              </a>
            </li>

            <li class="hamburger">
              <a href="https://github.com/karan0207/Animated-Travelweb">
                <div class="bar"></div>
              </a>
            </li>
          </ul>
          
        </nav>
      </header>
      <main>
        <div className="vignette"></div>
        <img
          src={background}
          alt="img1"
          data-speedx="0.3"
          data-speedy="0.38"
          data-speedz="0"
          data-rotation="0"
          className="parallax bg-img"
          data-distance="-200"
        />
        <img
          src={fog7}
          alt="img2"
          data-speedx="0.27"
          data-speedy="0.32"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-7"
          data-distance="850"
        />
        <img
          src={mountain10}
          alt="img3"
          data-speedx="0.195"
          data-speedy="0.305"
          data-speedz="0"
          data-rotation="0"
          className="parallax mountain-10"
          data-distance="1100"
        />
        <img
          src={fog6}
          alt="img4"
          data-speedx="0.25"
          data-speedy="0.28"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-6"
          data-distance="1400"
        />
        <img
          src={mountain9}
          alt="img5"
          data-speedx="0.125"
          data-speedy="0.155"
          data-speedz="0.15"
          data-rotation="0.02"
          className="parallax mountain-9"
          data-distance="1700"
        />
        <img
          src={mountain8}
          alt="img6"
          data-speedx="0.1"
          data-speedy="0.11"
          data-speedz="0"
          data-rotation="0.02"
          className="parallax mountain-8"
          data-distance="1800"
        />
        <img
          src={fog5}
          alt="img7"
          data-speedx="0.16"
          data-speedy="0.105"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-5"
          data-distance="1900"
        />
        <img
          src={mountain7}
          alt="img8"
          data-speedx="0.1"
          data-speedy="0.1"
          data-speedz="0"
          data-rotation="0.09"
          className="parallax mountain-7"
          data-distance="2000"
        />

        <div
          className="text parallax"
          data-speedx="0.07"
          data-speedy="0.07"
          data-speedz="0"
          data-rotation="0.11"
          data-distance="0"
        >
          <h2 >Karan's</h2>
          <h1>Website</h1>
        </div>

        <img
          src={mountain6}
          alt="img9"
          data-speedx="0.065"
          data-speedy="0.05"
          data-speedz="0.05"
          data-rotation="0.12"
          className="parallax mountain-6"
          data-distance="2300"
        />
        <img
          src={fog4}
          alt="img10"
          data-speedx="0.135"
          data-speedy="0.32"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-4"
          data-distance="2400"
        />
        <img
          src={mountain5}
          alt="img11"
          data-speedx="0.08"
          data-speedy="0.018"
          data-speedz="0.13"
          data-rotation="0.1"
          className="parallax mountain-5"
          data-distance="2550"
        />
        <img
          src={fog3}
          alt="img12"
          data-speedx="0.11"
          data-speedy="0.10.018"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-3"
          data-distance="2800"
        />
        <img
          src={mountain4}
          alt="img13"
          data-speedx="0.059"
          data-speedy="0.024"
          data-speedz="0.35"
          data-rotation="0"
          className="parallax mountain-4"
          data-distance="3200"
        />
        <img
          src={mountain3}
          alt="img14"
          data-speedx="0.04"
          data-speedy="0.018"
          data-speedz="0.32"
          data-rotation="0"
          className="parallax mountain-3"
          data-distance="3400"
        />
        <img
          src={fog2}
          alt="img15"
          data-speedx="0.15"
          data-speedy="0.0115"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-2"
          data-distance="3600"
        />
        <img
          src={mountain2}
          alt="img16"
          data-speedx="0.0235"
          data-speedy="0.013"
          data-speedz="0.42"
          data-rotation="0.15"
          className="parallax mountain-2"
          data-distance="3800"
        />
        <img
          src={mountain1}
          alt="img17"
          data-speedx="0.027"
          data-speedy="0.018"
          data-speedz="0.53"
          data-rotation="0.2"
          className="parallax mountain-1"
          data-distance="4000"
        />
        <img src={sunrays} alt="img18" className="sun-rays" />
        <img src={blackshadow} alt="img19" className="black-shadow" />
        <img
          src={fog1}
          alt="img20"
          data-speedx="0.12"
          data-speedy="0.1"
          className="parallax fog-1"
          data-distance="4200"
        />
      </main>
    
    <div className="box">
    <div className="heading">
        <h1>RESORTS</h1>
    </div>
        <div className="images">
    <img src={hotel1} alt="hotel1" />
    <img src={hotel2} alt="hotel2" />
    <img src={hotel3} alt="hotel3" />
        </div>
        <div className="content">
         <p>
Welcome to the epitome of luxury and tranquility – resorts, where indulgence meets nature's beauty. Our carefully curated resorts offer an escape from the ordinary, providing an immersive experience in breathtaking locations. Immerse yourself in opulent accommodations, surrounded by lush landscapes and world-class amenities. Whether you seek a serene retreat or an adventurous escape, our resorts promise an unparalleled blend of comfort and sophistication, creating an unforgettable haven for relaxation and exploration</p>


        </div>
    </div>
    </>
  );
};

export default ParallaxComponent;
