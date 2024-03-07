import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="ul">
        <li>
            <Link className="link" to="/">صفحه ی اصلی</Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">داشبورد</Link>
          </li>
          <li>
            <Link className="link" to="/register">ثبت نام</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
