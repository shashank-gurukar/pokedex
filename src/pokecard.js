import React, {Component} from "react";
import './pokecard.css';
const poke='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component{
render(){
    let img =`${poke}${this.props.id}.png`
    return (
    <div className="Pokecard">
        <div className="Pokecard-title"><h1>{this.props.name}</h1></div>
       <div className="Pokecard-data"><h1>Name:{this.props.name}</h1></div> 
       <div className="Pokecard-data"><h1>Type:{this.props.type}</h1></div> 
        <img src ={img} alt ='fuck u'/>
    </div>
   
    )
}
}
export default Pokecard;