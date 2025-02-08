import React from 'react'
import './Bannereight.css'
import man1 from './image/font/man1.png'
import man2 from './image/font/man2.png'
import man3 from './image/font/man3.png'


export default function Bannereight() {
  return (
    <div className='containereight'>
      <h1>Meet Our<span>Team</span></h1>
      <div className='box1'>
        <p>"Challenges are <br/>
            stepping stones <br/>
            to greatness."</p>
            <h3>Aziz Mughal</h3>
            <p>CEO</p>
      </div>
      <div className='box2'>
        <img src={man1}/>
      </div>
      <div className='box3'>
        <img src={man2}/>
      </div>
      <div className='box4'>
        <img src={man3}/>
      </div>






    </div>
  )
}
