import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className='col-6 p-5 mb-3'>
            <img src={imageUrl} />
        </div>

        <div className='col-6 p-5 mt-5'>
            <h3 className="text-muted">{productName}</h3>
            <p >{productDescription}</p>
            <div className="mb-4">
                <a href={tryDemo} style={{textDecoration:"none", marginLeft:"10px"}}>Try Demo <i className="fas fa-long-arrow-alt-right"></i></a>
                <a href={learnMore} style={{textDecoration:"none", marginLeft:"80px"}}>Learn More<i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <div>
                <a href={googlePlay} className="p-2"  style={{width:
                    
                    "90%"}}><img src="/media/images/googlePlayBadge.svg" /></a>
                <a href={appStore} className="p-2" style={{marginLeft:"20px", width:"90%"}}><img src="/media/images/appstoreBadge.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
