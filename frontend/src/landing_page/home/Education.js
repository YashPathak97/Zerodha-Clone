import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <img src='media/images/education.svg' className='imagefluid' style={{width: "75%"}}></img>
                </div>

                <div className='col-6 p-5'>
                    <h1 className='fs-4 mb-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education 
                       book in the world covering everything from the basics to advanced trading.
                    </p>
                    <div className='mb-5'><a href='' style={{textDecoration: 'none'}}>Varsity <i className="fas fa-long-arrow-alt-right"></i></a></div>

                    <p>TradingQ&A, the most active trading and investment
                       community in India for all your market related queries.
                    </p>
                    <div><a href='' style={{textDecoration: 'none'}}>TradingQ&A <i className="fas fa-long-arrow-alt-right"></i></a></div>
                </div>
            </div>
        </div>
     );
}

export default Education;