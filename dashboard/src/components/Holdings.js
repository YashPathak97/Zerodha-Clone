import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";
// useffect hook is used to fetch the holdings data from the backend API and set it to the state variable allHoldings. The data is then used to create a vertical bar graph using the VerticalGraph component. The table displays the holdings data with calculated current value, profit/loss, and net change for each stock.
// axios help s to make HTTP requests to the backend API to fetch the holdings data. The data is then displayed in a table format with relevant information such as instrument name, quantity, average cost, last traded price, current value, profit/loss, net change, and day change. The total investment, current value, and overall profit/loss are also displayed below the table.


const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="holdings-summary">
        <div className="row">
          <div className="col">
            <h5>
              29,875.<span>55</span>{" "}
            </h5>
            <p>Total investment</p>
          </div>
          <div className="col">
            <h5>
              31,428.<span>95</span>{" "}
            </h5>
            <p>Current value</p>
          </div>
          <div className="col">
            <h5>1,553.40 (+5.20%)</h5>
            <p>P&L</p>
          </div>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;