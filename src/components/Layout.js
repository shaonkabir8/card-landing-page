import React from "react";

const layout = ({ children }) => (
  <main className="container">
    <div className="container__inner">{children}</div>
  </main>
);

export default layout;
