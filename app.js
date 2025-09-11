import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//     React.createElement("h1", {}, "Hello, React1!"),
//     React.createElement("h2", {}, "hello, React2!"),
// ]),
// React.createElement("div", {id: "child2"}, [
//     React.createElement("h1", {}, "Hello, React3!"),
//     React.createElement("h2", {}, "hello, React4!"),
// ])
// ]);

// react elements
const jsx = () => <h1 id="heading">Hello from JSX!</h1>;
const elem = <h1>Hello from JSX!!</h1>;
// react Component and component composition
const Jsxheading = () => (
    <div id="heading">
         <h1>{console.log("Hello from JSX component!")}</h1>
        {jsx()}
        <h1 className="heading2">Hello from react component!</h1>
        {elem}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Jsxheading />);
