import React from "react";
import "./style.css";
import Contador from './components/contador';

export default function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Contador/>
      </div>
    </React.Fragment>
  );
}
