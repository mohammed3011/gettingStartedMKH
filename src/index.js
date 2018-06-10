import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Button from "./getting-started-1.js";
import App1 from "./getting-started-2.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Button />
    <App1 />
  </div>
);

render(<App />, document.getElementById("root"));
