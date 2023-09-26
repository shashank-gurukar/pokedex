import React,{Component} from 'react'
import Pokedex from './pokedex';

class Pokegame extends Component{
    static defaultProps={pokemon:[
        {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
        {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
        {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
        {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
        {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
        {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
        {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
        {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
      ]}
    render(){
        let h1=[];
        let h2=[...this.props.pokemon]
        while(h1.length<h2.length){
         let rand = Math.floor(Math.random()*h2.length)   
         let randPokemon= h2.splice(rand,1)[0];
         h1.push(randPokemon)
        }
        let ex1=h1.reduce((exp,pokemon)=>pokemon.base_experience,0)
        let ex2=h2.reduce((exp,pokemon)=>pokemon.base_experience,0)
        
        return(

            <div>
                
                <Pokedex pokemon={h1} exp={ex1} />
                <Pokedex pokemon={h2} exp ={ex2}/>
            </div>
        )
    }
}
export default Pokegame; 