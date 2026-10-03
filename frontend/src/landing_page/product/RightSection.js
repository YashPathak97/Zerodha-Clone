import React from 'react'
 
function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
      <div className="container">
      <div className="row mt-5">

        <div className='col-6 mt-5'>
            <div className="mb-4">
                 <h3 className="text-muted mt-5">{productName}</h3>
                <p>{productDescription}</p>
                <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>

        <div className='col-6 '>
            <img src={imageUrl} />
        </div>

       </div>
    </div>
     );
}

export default RightSection;