import React from 'react';
import "normalize.css/normalize.css";
import "./styles/style.css";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";
import FormFour from "./components/FormFour";

function App() {
  return (
    <div className="col-xl-8 col-md-8 col-sm-12" id="main-section">
      <FormOne />
      <FormTwo />
      <FormThree />
      <FormFour />
    </div>
  );
}

export default App;
