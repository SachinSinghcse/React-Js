import React from "react";
import ReactDOM from "react-dom/client";

const NewComponet = () => <h1>Hello jsx</h1>;

const HeadingComponet = () => (
  <div id="containetr">
    <h1 className="heading">Componett</h1>
  </div>
) ; 
const heading = React.createElement("h1", { id: "heading" }, "hello sachin");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const jsxheading = <h1 id="heading">nsmte sachin</h1>;
console.log(heading);
root.render(<NewComponet />);
root.render(<HeadingComponet />);
