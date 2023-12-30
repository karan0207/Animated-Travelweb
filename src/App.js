import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";


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
          <img src="img/logo.png" alt="travelo" class="logo" />
          <ul>
            <li  className="mobilenone">
              <a href="#">Login</a>
            </li>
            <li  className="mobilenone">
              <a href="#">Sign up</a>
            </li>
            <li class="search mobilenone">
              <a href="#">
                <SearchIcon />
              </a>
            </li>

            <li class="hamburger">
              <a href="#">
                <div class="bar"></div>
              </a>
            </li>
          </ul>
          
        </nav>
      </header>
      <main>
        <div className="vignette"></div>
        <img
          src="img/background.png"
          alt="img1"
          data-speedx="0.3"
          data-speedy="0.38"
          data-speedz="0"
          data-rotation="0"
          className="parallax bg-img"
          data-distance="-200"
        />
        <img
          src="img/fog_7.png"
          alt="img2"
          data-speedx="0.27"
          data-speedy="0.32"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-7"
          data-distance="850"
        />
        <img
          src="img/mountain_10.png"
          alt="img3"
          data-speedx="0.195"
          data-speedy="0.305"
          data-speedz="0"
          data-rotation="0"
          className="parallax mountain-10"
          data-distance="1100"
        />
        <img
          src="img/fog_6.png"
          alt="img4"
          data-speedx="0.25"
          data-speedy="0.28"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-6"
          data-distance="1400"
        />
        <img
          src="img/mountain_9.png"
          alt="img5"
          data-speedx="0.125"
          data-speedy="0.155"
          data-speedz="0.15"
          data-rotation="0.02"
          className="parallax mountain-9"
          data-distance="1700"
        />
        <img
          src="img/mountain_8.png"
          alt="img6"
          data-speedx="0.1"
          data-speedy="0.11"
          data-speedz="0"
          data-rotation="0.02"
          className="parallax mountain-8"
          data-distance="1800"
        />
        <img
          src="img/fog_5.png"
          alt="img7"
          data-speedx="0.16"
          data-speedy="0.105"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-5"
          data-distance="1900"
        />
        <img
          src="img/mountain_7.png"
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
          src="img/mountain_6.png"
          alt="img9"
          data-speedx="0.065"
          data-speedy="0.05"
          data-speedz="0.05"
          data-rotation="0.12"
          className="parallax mountain-6"
          data-distance="2300"
        />
        <img
          src="img/fog_4.png"
          alt="img10"
          data-speedx="0.135"
          data-speedy="0.32"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-4"
          data-distance="2400"
        />
        <img
          src="img/mountain_5.png"
          alt="img11"
          data-speedx="0.08"
          data-speedy="0.018"
          data-speedz="0.13"
          data-rotation="0.1"
          className="parallax mountain-5"
          data-distance="2550"
        />
        <img
          src="img/fog_3.png"
          alt="img12"
          data-speedx="0.11"
          data-speedy="0.10.018"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-3"
          data-distance="2800"
        />
        <img
          src="img/mountain_4.png"
          alt="img13"
          data-speedx="0.059"
          data-speedy="0.024"
          data-speedz="0.35"
          data-rotation="0"
          className="parallax mountain-4"
          data-distance="3200"
        />
        <img
          src="img/mountain_3.png"
          alt="img14"
          data-speedx="0.04"
          data-speedy="0.018"
          data-speedz="0.32"
          data-rotation="0"
          className="parallax mountain-3"
          data-distance="3400"
        />
        <img
          src="img/fog_2.png"
          alt="img15"
          data-speedx="0.15"
          data-speedy="0.0115"
          data-speedz="0"
          data-rotation="0"
          className="parallax fog-2"
          data-distance="3600"
        />
        <img
          src="img/mountain_2.png"
          alt="img16"
          data-speedx="0.0235"
          data-speedy="0.013"
          data-speedz="0.42"
          data-rotation="0.15"
          className="parallax mountain-2"
          data-distance="3800"
        />
        <img
          src="img/mountain_1.png"
          alt="img17"
          data-speedx="0.027"
          data-speedy="0.018"
          data-speedz="0.53"
          data-rotation="0.2"
          className="parallax mountain-1"
          data-distance="4000"
        />
        <img src="img/sun_rays.png" alt="img18" className="sun-rays" />
        <img src="img/black_shadow.png" alt="img19" className="black-shadow" />
        <img
          src="img/fog_1.png"
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
    <img src="https://imgs.search.brave.com/3hdgd962cmnYRAxSnRXoKpkzgkmhnVgdNHhH2uOfDUo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA3/NjE0NDUwL3Bob3Rv/L2x1eHVyeS1yZXNv/cnQtaG90ZWwtd2l0/aC1zd2ltbWluZy1w/b29sLWF0LXN1bnNl/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZVVpanp3LU1r/UHcwMEhBdzQ2NEkz/bXdhNGIxN3locmZ2/aDVIaUdaaUVxbz0" alt="" />
    <img src="https://imgs.search.brave.com/b7yZVhSFKCPYGridEko2uC0cI2tyx8CXcHAKJ4f63bA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTQ0MTQ3L3Bob3Rv/L2EtdHJvcGljYWwt/cmVzb3J0LXBvb2wt/aW4tZnJvbnQtb2Yt/dGhlLW9jZWFuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/cURhbWZTa0lqX01K/ZG82Q2tocTlzYnI1/MGFyTEFCdGo5T0pH/RHEwN0k0PQ" alt="" />
    <img src="https://imgs.search.brave.com/qOvrXE2NsB_c0UZPTX1MnsMAcdwhcQidpMoCCzQ1a80/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDc1OTMvMTEyNy9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExMjc2/NjQyLXN0b2NrLXBo/b3RvLWx1eHVyeS1w/bGFjZS1yZXNvcnQu/anBn" alt="" />
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
