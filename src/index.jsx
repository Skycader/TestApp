import * as $ from "jquery";
import Post from "@models/Post";
import "./styles/styles.css";
import json from "./assets/json.json";
import WebPackLogo from "./assets/webpack-logo.png";
import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./babel";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import "./styles/less.less";
import "./styles/scss.scss";

const post = new Post("Webpack title", WebPackLogo);

$("pre").addClass("code").html(post.toString());
console.log(post.toString());

const App = () => (
  <div>
    <div id="container">
      <h1>Webpack</h1>
    </div>

    <hr/>

    <div class="logo"></div>

    <hr/>

    <pre></pre>

    <div class="box">
      <h2>Less</h2>
    </div>

    <div class="card">
      <h2>SCSS</h2>
    </div>

    <div>JSX Test: {Math.random()}</div>
  </div>
);

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />);

console.log("JSON: ", json);
console.log("XML: ", xml);
console.log("CSV: ", csv);
