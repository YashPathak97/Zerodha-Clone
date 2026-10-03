import React from 'react'

function Hero() {
    return ( 
        <div className='container mt-5 mb-5 border-bottom'>
            <div className='row text-center text-muted'>
                <h3 className='mb-3 mt-5'>Zerodha Products</h3>
                <h5 className='mb-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mb-5'>Check out our <a href="/" style={{textDecoration:"none"}}>investment offerings → </a></p>
            </div>
        </div>
     );
}

export default Hero;