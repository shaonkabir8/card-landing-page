import React from "react";
import Photo from "../assets/img/photo.jpg";

export default function Card() {
  return (
    <section className="card">
      <div className="card__content">
        <h1 className="card__header">
          John Wick{" "}
          <span className="card__header--meta">Creative Photographer</span>{" "}
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
              <a href="#" className="menu__link">
                Work
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card__img">
        <img src={Photo} alt="Photo" className="card__img--item" />
      </div>
    </section>
  );
}
