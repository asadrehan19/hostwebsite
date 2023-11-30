function Map(){
let foods = ["Milk","Dodh","Juice","Mango","Banana","Anar","Peace"];
return (
<ul className="list-group">
{foods.map((fooditems)=>(
 <li key={fooditems} className="list-group-item">{fooditems}</li>
))}
</ul>
);
}
export default Map;
  