import React from 'react'
import "./Home.css"
import { IoMdLogIn } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPoliceCarLine } from "react-icons/ri";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <nav>
          <div className='d-flex backcolor'>
            <div className='d-flex mt-3'>
              <Link to="/"><img src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg" alt="" className='logo' /></Link>
              <ul className='li'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Models</Link></li>
                <li><Link to="/">Electric</Link></li>
              </ul>
            </div>

            <div className='icon'>
              <a href="" className='icon-link'><IoMdLogIn size={25} color="white" className='icon-item' /></a>
              <a href="" className='icon-link'><IoLocationOutline size={25} color="white" className='icon-item ' /></a>
              <a href="" className='icon-link'><MdOutlineShoppingCart size={24} color="white" className='icon-item' /></a>
            </div>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/" element={<aboutus />} />
          <Route path="/" element={<models />} />
          <Route path="/" element={<electric />} />
        </Routes>
      </Router>

      <div className="banner">
        <img
          src="https://bmw.scene7.com/is/image/BMW/index-banner-v4:16to7?fmt=webp&wid=2560&hei=1120"
          alt="BMW Banner"
          className="img"
        />

        {/* Content Above Button */}
        <div className="banner-content">
          <h1>The Ultimate Driving Machine</h1>
          <p>Experience innovation, performance and luxury like never before.</p>
        </div>

        <button className="discover-btn">Discover now</button>
      </div> <br /><br />

      <div>
        <center>
          <h2 className='head2'>Find your BMW</h2><br /><br />
        </center>

        <div className='icon-div'>
          <div>
            <a href=""><AiOutlineCar size={60} color='black' className='icon-home' /></a><br /><br />
            <h3 className='head3'>Find a new car.</h3><br />
            <button className='button-home'>Search now</button>
          </div>

          <div>
            <a href="" style={{ marginLeft: '20px' }}><IoCarSportOutline size={60} color='black' className='icon-home' /></a><br /><br />
            <h3 className='head3' style={{ marginLeft: '20px' }}>Book test drive.</h3> <br />
            <button className='button-home'>Request test drive</button>
          </div>

          <div>
            <a href="" style={{ marginLeft: '15px' }}><RiPoliceCarLine size={60} color='black' className='icon-home' /></a><br /><br />
            <h3 className='head3' style={{ marginLeft: '10px' }}>Build your own.</h3><br />
            <button className='button-home'>Configure & Price</button>
          </div>
        </div>

      </div> <br /><br />

      <div>
        <div className="image-container">
          <img className="image" src="https://bmw.scene7.com/is/image/BMW/GKL_Web_Banner_3000_3000_new:3to1?fmt=webp&wid=2560&hei=853" alt="BMW" />

          <div className="image-content">
            <h1 style={{ fontSize: '40px' }}>LUXURY. FAST. FORWARD.</h1>
            <p>THE BMW 7 RANGE..</p>
            <button className="discover-btn2">Discover Now</button>
          </div>
        </div><br /><br />

        <div className="image-container">
          <img className="image" src="https://bmw.scene7.com/is/image/BMW/3000x3000_1-1:3to1?fmt=webp&wid=2560&hei=853" alt="BMW" />

          <div className="image-content">
            <h1 style={{ fontSize: '100px' }}>iX1</h1>
            <p>LONG WHEELBAS <br />DOMINATE EVERYDAY. YOUR WAY.</p>
            <button className="discover-btn2">Discover Now</button>
          </div>
        </div><br /><br />

        <video className='video' autoPlay
          muted
          loop
          controls src="src/Home/videoplayback (1).mp4"></video>
      </div><br /><br />

    </>

  )
}

export default App


