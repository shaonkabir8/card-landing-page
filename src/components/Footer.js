import React from "react";
import Icon from "./Icon";

const footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__social">
        <ul className="footer__social--list">
          <li className="footer__social--item">
            <Icon name="twitter" clName="footer__social--link" />
          </li>
          <li className="footer__social--item">
            <Icon name="facebook" clName="footer__social--link" />
          </li>
          <li className="footer__social--item">
            <Icon name="instagram" clName="footer__social--link" />
          </li>
          <li className="footer__social--item">
            <Icon name="unsplash" clName="footer__social--link" />
          </li>
          <li className="footer__social--item">
            <Icon name="phone" phone="01247" clName="footer__social--link" />
          </li>
          <li className="footer__social--item">
            <Icon
              name="email"
              email="mailto:example@domain.com"
              clName="footer__social--link"
            />
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        &copy; Cayce Pollard. All rights reserved.
      </div>
    </div>
  </footer>
);

export default footer;
