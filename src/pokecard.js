import React, {Component} from "react";
import './pokecard.css';
const poke='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component{
render(){
    let img =`${poke}${this.props.id}.png`
    return (
    <div className="Pokecard">
        <h1>{this.props.id}</h1>
        <h1>Name:{this.props.name}</h1>
        <h1>Type:{this.props.type}</h1>
        <img src ={img} alt ='fuck u'/>
    </div>
   
    )
}
}
export default Pokecard;