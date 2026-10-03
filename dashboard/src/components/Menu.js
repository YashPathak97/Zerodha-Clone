import React, { useState } from "react";

import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="d-flex align-items-center justify-content-between h-100 px-4">
      <div className="d-flex align-items-center gap-5">
        <img
          src="/media/images/kiteLogo.png"
          alt="Kite"
          style={{ width: "28px" }}
        />
        <ul className="d-flex gap-4 list-unstyled m-0">
          <li>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/position" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Position</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center gap-2" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
        <div
          className="d-flex align-items-center justify-content-center text-white fw-bold"
          style={{
            backgroundColor: "#d2aae5",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          ZU
        </div>
        <p className="m-0">USERID</p>
      </div>
      {isProfileDropdownOpen}
    </div>
  );
}

export default Menu;
