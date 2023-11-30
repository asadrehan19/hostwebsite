import { useState } from "react";
import style from "./Buttons.module.css";
const Buttons = ({value,onButtonClick}) => {
  // let Btn = ["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0"];
  let [Btn,setChane] = useState(["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0","="]);
  const handleOnChange = (event)=>{
    if(event.key === "Enter"){
      let newBtn =  event.target.value;
      event.target.value = "";
      let newButtons = [...Btn,newBtn]; 
      setChane(newButtons);
    }
  }
  return (
    <div className={style.btnContainer}>
      <input type="text" placeholder="Calculator" className={style.Input} onKeyDown={handleOnChange} value={value} readOnly/>
      {Btn.map((btn) => (
        <button className={style.buttons} key={btn} onClick={()=> onButtonClick(btn)}>{btn}</button>
      ))}
    </div>
  );
};

export default Buttons;
