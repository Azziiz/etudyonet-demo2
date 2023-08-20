import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'


function About() {
  return (
    <div>
      <div className="about">
        <div className='square'></div>
        <div className="text">
            <h2 className='h2'>Etudyonet Makes student life</h2>
            <span>Simple</span>
        </div>
        <div className='men'>
            <div className='man1'>
                <div className="head"><h2>Community</h2></div>
                <div className='body'>
                    <h2>As an Etudiant, only Etudyonet can solve your problems.</h2>
                    <h3>We all know that students can provide more than people think they can.</h3>
                    <h3> That's why we created Etudyonet, a platform where you can find students from all parts of Tunisia.</h3>
                </div>

            </div>
            <div className='man2'>
                <div className="head"><h2>Side hustle</h2></div>
                <div className='body'>
                    <h2>On Etudyonet, you get paid for doing what you love.</h2>
                    <h3>Provide what you love doing to others as a service and get paid!</h3>
                </div>
            </div>
            <div className='man3'>
                <div className="head"><h2>Market</h2></div>
                <div className='body'>
                    <h2>Etudyonet provide more than experts.</h2>
                    <h3>Students can be better than experts at doing what they love!</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
