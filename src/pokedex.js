import React, {Component} from "react";
import Pokecard  from "./pokecard";
import './pokedex.css'
class Pokedex extends  Component{
   
    render(){
        let title;
        if(this.props.isWinner){
           title= <div className="Pokedex-winner"> <h1>Winning hand</h1> </div>
        }
        else{
          title=  <div className="Pokedex-loser"> <h1>Losing hand</h1> </div>
        }
        return(
           <div className="Pokedex">
             {title}
            <h4>Total exp : {this.props.exp}</h4>
           
            <div className="Pokedex-cards">
            {this.props.pokemon.map((p)=>(
                <Pokecard id = {p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
          
             </div>
        )
    }
}
export default Pokedex;