import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Section6.css'
import Data2 from './Data.section6'


const Section6 = () => {
   const testimonials = Data2.map((item)=>{
    return(
      <Carousel.Item>
      <img src={item.img} alt='' />
      <Carousel.Caption>
      <p>{item.title}</p>
        <h5>{item.name}</h5>
      </Carousel.Caption>
    </Carousel.Item>
    )
   })
  return (
    <div className='testimonials'>
        <h2>Testimonials</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                <Carousel>
                  {testimonials}
                </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6