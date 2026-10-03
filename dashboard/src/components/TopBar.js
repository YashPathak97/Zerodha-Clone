import React from 'react'
import Menu from "./Menu";

function TopBar() {
    return (
        <div className='d-flex border-bottom' style={{ height: "90px" }}>
            {/* Left column: border is here */}
            <div
                className='d-flex align-items-center gap-5 px-3'
                style={{ flex: "0 0 500px", borderRight: "1px solid #000" }}
            >
                <div className='d-flex gap-3'>
                    <p className='m-0'>NIFTY50</p>
                    <p className='m-0' style={{ color: "#df514c" }}>{100.2}</p>
                </div>
                <div className='d-flex gap-3'>
                    <p className='m-0'>SENSEX</p>
                    <p className='m-0' style={{ color: "#df514c" }}>{100.2}</p>
                </div>
            </div>

            {/* Right column */}
            <div className='flex-grow-1'>
                <Menu />
            </div>
        </div>
    );
}

export default TopBar;