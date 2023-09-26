import React, {Component} from "react";
import './pokecard.css';
// const poke='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const poke='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

function addZero(id){
    if(id>999){
        return id;
    }
    else{
        return `00${id}`.slice(-3)
    }

}

class Pokecard extends Component{
render(){
   let id= addZero(this.props.id);
    let img =`${poke}${id}.png`
    return (
    <div className="Pokecard">
        <div className="Pokecard-title"><h1>{this.props.name}</h1></div>
       <div className="Pokecard-data"><h1>Name:{this.props.name}</h1></div> 
       <div className="Pokecard-data"><h1>Type:{this.props.type}</h1></div> 
        <div className="Pokecard-image"><img src ={img} alt ='fuck u'/></div>
    </div>
   
    )
}
}
export default Pokecard;