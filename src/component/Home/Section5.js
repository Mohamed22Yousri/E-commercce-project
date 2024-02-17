import React from 'react'
import './Section5.css'
import Data from './DataSection5'


const Section5 = () => {
    const prodcut = Data.map((item)=>{
        return(
            <div className='col-md-4'>
            <img src={item.img} alt=''/>
            <h5>{item.title}</h5>
            <p>{item.time}</p>
            <span>{item.Discount}</span>
            <span>{item.Price}</span>
            <button>Order Now</button>
        </div>
        )
    })
  return (
    <div className='cards'>
        <div className='container'>
            <div className='text'>
                <h2>Explore Our Foods</h2>
                <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        
            </div>
            <div className='row'>
               {prodcut}
            </div>
        </div>
    </div>
  )
}

export default Section5