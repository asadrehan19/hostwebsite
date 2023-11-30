import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./Calculator.jsx/Buttons";
import { useState } from "react";
function App() {
  const [currentValue,setValue] = useState("");
  let onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setValue ("");
    }else if(buttonText === '='){
     const reasult = eval(currentValue);
     setValue(reasult);
    }else{
      const totalValue = currentValue + buttonText;
      setValue(totalValue);
    }
  };
  return (
    <center className={style.container}>
      <Buttons value={currentValue}
      onButtonClick={onButtonClick}
      />
    </center>
  );
}
export default App;
