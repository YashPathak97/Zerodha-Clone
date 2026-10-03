import React from 'react'

function Universe() {
    return ( 
        <div className='container text-center'>
            <h3 className='mt-5 text-center'>The Zerodha Universe</h3>
            <p className='mt-4 text-center'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row mt-5 mb-5 p-5'>
                <div className='col-4 p-2 text-center text-muted'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-center'>Thematic investing platform<br></br>
                        that helps you invest in diversified<br></br>
                        baskets of stocks on ETFs.
                    </p>

                    <br></br><br></br>
                    <img src="media/images/zerodhaFundhouse (1).png" style={{width: "50%"}}/>
                    <p className='text-center'>Our asset management venture<br></br>
                    that is creating simple and transparent index<br></br>
                    funds to help you save for your goals.
                    </p>
                    
                </div>

                <div className='col-4 p-2 text-center text-muted'>
                    <img src="media/images/streakLogo.png" className='img-fluid' style={{width: "40%"}}/>
                    <p className='text-center'>Systematic trading platform<br></br>
                        that allows you to create and backtest<br></br>
                        strategies without coding.
                    </p>
                    <br></br><br></br>
                    <img src="media/images/goldenpiLogo.png" className='img-fluid' style={{width: "40%"}}/>
                    <p className='text-center'>Bonds trading platform
                    </p>
                </div>

                <div className='col-4 p-2 text-center'>
                    <img src="media/images/sensibullLogo.svg" className='img-fluid mb-2' style={{width: "40%"}}/>
                    <p className='text-center'>Options trading platform that lets you<br></br>
                    create strategies, analyze positions, and examine<br></br>
                    data points like open interest, FII/DII, and more.
                    </p>
                    <br></br><br></br>
                    <img src="media/images/dittoLogo.png" className='img-fluid' style={{width: "30%"}}/>
                    <p className='text-center'>Personalized advice on life<br></br>
                    and health insurance. No spam<br></br>
                    and no mis-selling.<br></br>
                    Sign up for free
                    </p>
                </div>
            </div>
            <button  className="p-2 btn btn-primary fs-5 mb-5" style={{width:'20%', margin: '0px auto'}}> Signup now </button>
        </div>
     );
}

export default Universe;