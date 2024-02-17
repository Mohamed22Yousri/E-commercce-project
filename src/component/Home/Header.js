import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>Good Food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aut!</p>
                    <button>order now</button>
                    <button>learn more</button>
                </div>
                <div className='col-md-6'>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header