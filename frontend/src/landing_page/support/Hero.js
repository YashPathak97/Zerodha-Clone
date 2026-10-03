import React from 'react'

function Hero() {
    return ( 
 <div style={{ backgroundColor: "#387ed1", color: "white" }}>
    <div className="container">

        {/* Top row: Support Portal + Track Tickets */}
        <div className="row pt-4">
            <div className="col-5 offset-1">
                <h4>Support Portal</h4>
            </div>
            <div className="col-5 offset-1 text-end">
                <a href="#" style={{ color: "white" }}>Track Tickets</a>
            </div>
        </div>

        {/* Main row: search + featured */}
        <div className="row mt-5 pb-5">
            <div className="col-5 offset-1 mt-4">
                <h3 className="mb-4">
                    Search for an answer or browse help topics to create a ticket
                </h3>
                <input
                    className="mb-3"
                    style={{
                        width: "100%",
                        height: "60px",
                        padding: "20px",
                        border: "none",
                        borderRadius: "5px"
                    }}
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                />
                <div>
                    <a href="#" style={{ color: "white", marginRight: "15px" }}>Track account opening</a>
                    <a href="#" style={{ color: "white", marginRight: "15px" }}>Track segment activation</a>
                    <a href="#" style={{ color: "white", marginRight: "15px" }}>Intraday margins</a>
                    <a href="#" style={{ color: "white" }}>Kite user manual</a>
                </div>
            </div>

            <div className="col-5 offset-1 mt-4">
                <h3 className="mb-3">Featured</h3>
                <ol>
                    <li className="mb-2">
                        <a href="#" style={{ color: "white" }}>Current Takeovers and Delisting - January 2024</a>
                    </li>
                    <li>
                        <a href="#" style={{ color: "white" }}>Latest Intraday leverages - MIS &amp; CO</a>
                    </li>
                </ol>
            </div>
        </div>

    </div>
</div>
     );
}

export default Hero;