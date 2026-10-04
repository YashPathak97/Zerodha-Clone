import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    <h1 className='mt-5 fs-3 text-muted'> Open a Zerodha account </h1>
                    <p className='mt-4 '> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
                    <Link to="/signup"><button  className="p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width:'20%', margin: '0px auto'}}> Sign up for free </button></Link>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;