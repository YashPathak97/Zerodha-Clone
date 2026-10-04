import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>

                    <h2 className='mb-2 fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha
                       with ₹3.5+ lakh crores worth of equity investments.
                    </p>

                    <h2 className='mb-2 mt-4 fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications.
                       High quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 className='mb-2 mt-4 fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech 
                       startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className='mb-2 mt-4 fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't 
                       just facilitate transactions, but actively help you do better with money.
                    </p>
                </div>

                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' className='img-fluid' style={{width: "95%"}}></img>
                    <div className='text-center'>
                        <a className="mx-5" style={{textDecoration:'none'}} href='/product'>Explore our products <i className="fas fa-long-arrow-alt-right"></i></a>
                        <a href='https://zerodha-clone-dashboard-x3t1.onrender.com' style={{textDecoration:'none'}}>Try Kite demo <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;