import React from "react";
import Featured_Image from "../assets/img/photo.jpg";

const card = () => (
  <section className="card">
    <div className=" card__area">
      <div className="card__content">
        <h1 className="card__header">
          Cayce Pollard
          <span className="card__header--meta">Multiverse Analist</span>
        </h1>
        <p className="card__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          earum, minus odit similique minima magnam fuga reiciendis
          exercitationem rerum dolor quisquam amet molestias? Quas adipisci ab
          eum sed aperiam repudiandae?
        </p>
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#work" className="menu__link">
                Work
              </a>
            </li>
            <li className="menu__item">
              <a href="#blog" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-img">
      <img
        src={Featured_Image}
        alt="Featured_Image"
        className="card-img__item"
      />
    </div>
  </section>
);

export default card;
