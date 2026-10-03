import React from 'react'

function CreateTicket() {
    return ( 
        <div className='container'>
            <h2 className='text-muted mt-5'>To create a ticket, select a relevant topic</h2>
            <div className='row mt-5'>
                <div className='col-4 mt-5'>
                    <h4 className='text-muted'><i className="fas fa-plus"></i> Account Opening</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Online Account Opening</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Offline Account Opening</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Company, Partnership and HUF Account Opening</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>NRI Account Opening</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Charges at Zerodha</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Getting Started</a></li>
                    </ul>
                </div>

                <div className='col-4 mt-5'>
                    <h4><i className="fas fa-user"></i> Your Zerodha Account</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Login Credentials</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Account Modification and Segment Addition</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>DP ID and bank details</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Your Profile</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Transfer and conversion of shares</a></li>
                    </ul>
                </div>

                <div className='col-4 mt-5'>
                    <h4><i className="fas fa-chart-bar"></i> Your Zerodha Account</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Margin/leverage, Product and Order types</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Kite Web and Mobile</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Trading FAQs</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Corporate Actions</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Sentinel</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Kite API</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Pi and other platforms</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>Stockreports+</a></li>
                        <li className='mb-3'><a href="" style={{textDecoration:"none"}}>GTT</a></li>
                    </ul>
                </div>
            </div>


            <div className='row mt-5'>
                <div className='col-4 mt-5'>
                    <h4><i className="fas fa-credit-card"></i> Funds</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Adding Funds</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Fund Withdrawal</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>eMandates</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Adding Bank Accounts</a></li>
                    </ul>
                </div>

                <div className='col-4 mt-5'>
                    <h4><i className="fas fa-circle-notch"></i> Console</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Reports</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Ledger</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Portfolio</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>60 Day Challenge</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>IPO</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Referral Program</a></li>
                    </ul>
                </div>

                <div className='col-4 mt-5'>
                    <h4><i className="far fa-circle"></i> Coin</h4>
                    <ul className='mt-3'>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Understanding Mutual Funds</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>About Coin</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Buying and Selling through Coin</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Starting an SIP</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Managing your Portfolio</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Coin App</a></li>
                        <li className='mb-3'><a href="#" style={{textDecoration:"none"}}>Moving to Coin</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;