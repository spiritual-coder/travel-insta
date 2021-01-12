import React from "react";

import { BackTop } from "antd";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fa fa-umbrella"></i>
          <a href="http://xyz.com">&nbsp;TravelInsta</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 TravelInsta</div>
        <BackTop>
          <div className="goTop">
            <i className="fa fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
