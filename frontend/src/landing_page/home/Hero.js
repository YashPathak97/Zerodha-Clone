import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    <img src="media/images/homeHero.png" alt='Hero' className='img-fluid mb-5'></img>
                    <h1 className='mt-5'> Invest in everything </h1>
                    <p> Online platform to invest in stocks, mutual funds and more </p>
                    <Link to="/signup"><button className="btn btn-primary" style={{ width: '20%', margin: '0px auto' }}>Signup</button></Link>
                </div>
            </div>
        </div>
     );
}

export default Hero;