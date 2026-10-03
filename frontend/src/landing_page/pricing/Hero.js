import React from "react";

function Hero() {
  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <h3 className="text-muted mt-5">Charges</h3>
      <p className="text-muted fs-4 " style={{marginBottom:"10%"}}>List of all charges and taxes</p>
      <div className="row mt-5 border-top">
        <div className="col-4 mt-5">
          <img src="media/images/pricing0.svg" style={{width:"60%"}}></img>
          <h3>Free equity delivery</h3>
          <p className="text-muted mt-3 fs-5">
            All equity delivery investments (NSE, BSE), <br></br>are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img src="media/images/intradayTrades.svg" style={{width:"60%"}}></img>
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-3 fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>executed order on
            intraday trades across<br></br> equity, currency, and commodity trades. Flat<br></br>
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img src="media/images/pricing0.svg" style={{width:"60%"}}></img>
          <h3>Free direct MF</h3>
          <p className="text-muted mt-3 fs-5">All direct mutual fund investments are<br></br> absolutely free — ₹ 0 commissions & DP <br></br>charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
