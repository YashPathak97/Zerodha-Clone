import React from 'react'

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    <h1 className='mt-5 fs-3 text-muted'> 404 Not Found </h1>
                    <p className='mt-4 '> Sorry, the page you are looking for does not exist. </p>
                </div>
            </div>
        </div>
     );
}

export default NotFound;