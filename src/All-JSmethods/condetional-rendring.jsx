
import Style from "../All-JSmethods/foods.module.css"
function Menu (props){
    return(
       <h3 className={Style["fod"]}>{props.food}</h3>
    )
}

export default Menu;