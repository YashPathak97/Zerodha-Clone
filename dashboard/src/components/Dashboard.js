
import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Position from "./Position";
import Fund from "./Fund";
import Apps from "./Apps";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  return (
    <RequireAuth>
      <GeneralContextProvider>
        <div
          className="d-flex"
          style={{ minHeight: "calc(100vh - 90px)" }}
        >
          <div
            style={{
              flex: "0 0 500px",
              borderRight: "1px solid #000",
            }}
          >
            <WatchList />
          </div>

          <div className="content flex-grow-1">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/position" element={<Position />} />
              <Route path="/funds" element={<Fund />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </div>
        </div>
      </GeneralContextProvider>
    </RequireAuth>
  );
}

export default Dashboard;