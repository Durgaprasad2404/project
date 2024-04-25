import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { FaRegCalendar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiTwotoneProfile } from "react-icons/ai";

const savedlist=[
  {id:1,'icon':<AiTwotoneProfile />,'Title':'My Saved Library 1','date':'dd/mm/yyyy','color':'skyblue'},
  {id:2,'icon':<AiTwotoneProfile />,'Title':'My Saved Library 2','date':'dd/mm/yyyy','color':'red'},
  {id:3,'icon':<AiTwotoneProfile />,'Title':'My Saved Library 3','date':'dd/mm/yyyy','color':'orange'},
  {id:4,'icon':<AiTwotoneProfile />,'Title':'My Saved Library 4','date':'dd/mm/yyyy','color':'blue'},
]
function Sidesection() {
  const [dateTime, setDateTime] = useState(new Date());
  const [showCar,setshowCar]=useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dateTime.getDay()];

  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const getGreetingMessage = () => {
      const currentHour = dateTime.getHours();
      if (currentHour < 12) {
        return 'Good morning';
      } else if (currentHour < 18) {
        return 'Good afternoon';
      } else {
        return 'Good evening';
      }
    };
    function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000",borderRadius:'15px' }}
      onClick={onClick}
    />
  );
}
 function  show() {
  setshowCar(true)
}
 function  showLess() {
  setshowCar(false)
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000",borderRadius:'15px' }}
      onClick={onClick}
    />
  );
}
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='sidesection'>
      <div>
        <Sidebar/>
      </div>
      <div className='sidesectionRight'>
        <div className='greet-savecardsCon'>
          <div className='greetingAndDate'>
            <div>
              <h4 className='greeting'>{getGreetingMessage()},Durga Prasad</h4>
              <p className='greeting-para'>You are Subscribed to Retail plan</p>
            </div>
            <div>
              <p className='date-time'>
                <FaRegCalendar /> Today, {`${dateTime.getDate()} ${dayName}`} <span><IoMdTime /> </span>{`${hours}:${minutes}`}
              </p>
            </div>
          </div>
          <div className='saveBoxesCon'>
          {savedlist.map((i)=>{
            return (<div key={i.id} className='saved-boxes'>
              <i >{i.icon}</i>
              <h2 className='head'>
                {i.Title}
              </h2>
              <p>{i.date}</p>
            </div>)
          })}
        </div>
        </div>
        <div className='slideCon'>
          <Slider {...settings}>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
      </Slider>
        </div>
        {showCar && (
          <div className='slideCon1'>
          <Slider {...settings}>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
        <div>
          <img src="./images/market.jpg" alt="#" className='img'/>
          <h3>State of Markets</h3>
          <p className='para-slide'>The market capitalisation of indian stocks crossed US$4.5 trillion in January</p>
        </div>
      </Slider>
        </div>
        )}
        {!showCar &&
        (
          <div className='btnCon'>
          <button onClick={show} className='btnEl'>View More</button>
        </div>
        )}
        {showCar &&
        (
          <div className='btnCon1'>
          <button onClick={showLess} className='btnEl'>View Less</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Sidesection
