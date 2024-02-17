import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Section3.css'
import ingredients from './../../img/section3.png'


const Section3 = () => {
  return (
    
             <div className='ingredients'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <FontAwesomeIcon className='icon1' icon={faCheck} />       
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <FontAwesomeIcon className='icon2' icon={faCheck} />       

                        <li>purus a odio finibus bibendum.</li>
                        <FontAwesomeIcon className='icon3' icon={faCheck} />       
                    </ul>
                    <button>Learn More</button>
                </div>
                <div className='col-md-6'>
                <div className='img'>
                    <img src={ingredients} alt=''/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3