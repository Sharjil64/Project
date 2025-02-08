import React from 'react';
import './Bannerfive.css';
import MacBook from './image/font/MacBook.png'

export default function Bannerfive() {
  return (
    <div className ="fivr">
      <div className="content">
        <h2 className='title'>HOW WE MAKE IT BETTER</h2>
        <p className='para'>
            Observation of the goal market and designed advertising &<br/>
             marketing approach format in accordance with the requirement.<br/><br/>
            </p>
            <p className='para'>
            Divide the fundamental goal into small goals and comply<br/> with the calendar, thus for intention achievement.<br/><br/>
            </p>
            <p className='para'>
            Analysis of advertising and monitoring in the element for the<br/> ROI, create an income funnel consequently and observe until <br/>achievement.
            </p> 
      </div>
      <div className='pcc'>
       <img src={MacBook}/>
      </div>

      <div className="video-thumbnails">
        <div className="thumbnail">
          <video
            src="https://www.w3schools.com/html/movie.mp4" 
            alt="Video 1"
          />
        </div>
        <div className="thumbnail">
          <video
            src="https://www.w3schools.com/html/movie.mp4" 
            alt="Video 2"
          />
        </div>
        <div className="thumbnail">
          <video
            src="https://www.w3schools.com/html/movie.mp4" 
            alt="Video 3"/>
        </div>
        <div className="thumbnail">
          <video
            src="https://www.w3schools.com/html/movie.mp4" 
            alt="Video 4"
          />
        </div>
      </div>

    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
  );
}
