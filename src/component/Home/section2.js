import React from 'react'
import section3 from './../../img/section-2.jpg'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='pride'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                <img src={section3} alt=''/>
                </div>
                <div className='col-md-5'>
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2