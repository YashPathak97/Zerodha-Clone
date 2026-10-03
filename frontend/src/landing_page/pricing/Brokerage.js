import React from 'react'

function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row ' style={{marginTop:"10%"}}>
                <div className='col-8'>
                    <h2 className='text-center mb-5' style={{color:" #387ed1"}}>Brokerage calculator</h2>
                    <ul>
                        <li className='mb-3'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className='mb-3'>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-3'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-3'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-3'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-3'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h2 className='text-center mb-5' style={{color:" #387ed1"}}>List of charges</h2>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;