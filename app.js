import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "Hello, React1!"),
    React.createElement("h2", {}, "hello, React2!"),
]),
React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "Hello, React3!"),
    React.createElement("h2", {}, "hello, React4!"),
])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
