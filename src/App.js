import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen'
import PokeSprite from './components/PokeSprite'

let Pokedex = require('pokeapi-js-wrapper');
let P = new Pokedex.Pokedex();

class App extends Component {
  constructor(props){
    super(props)
    this.updatedPokemon ={}
    this.state = {
      pokemon: {
        name: "pikachu",
        types: [{type:{name:"electric"}}],
        height: 4,
        weight: 60,
        genusName: "Mouse",
        flavorText: "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      }
    }
    this.newPokemon = this.newPokemon.bind(this)
    this.getPokemon = this.getPokemon.bind(this)
  }

  newPokemon(){
    let newPokemon = prompt("Enter a pokemon:");
    this.getPokemon(newPokemon);
  }

  getPokemon(pokemon){
    P.getPokemonByName(pokemon)
    .then(response => {
      this.updatedPokemon = {
        id: response.id,
        name: response.name,
        types: response.types,
        height: response.height,
        weight: response.weight,
        genusName: null,
        flavorText: null,
        sprite: response.sprites.front_default
      }
      console.log(this.updatedPokemon);
    this.getSpecies(this.updatedPokemon.id)
    })
  }

  getSpecies(id){
    P.getPokemonSpeciesByName(id)
    .then(response => {
      let index = response.flavor_text_entries.length - 1
      this.updatedPokemon.genusName = response.genera[0].genus
      this.updatedPokemon.flavorText = response.flavor_text_entries[index].flavor_text

      this.setState({pokemon: this.updatedPokemon})
    })
  }

  render() {
    return (
      <div id="pokedex">
  <div id="left">
    <div id="logo"></div>
    <div id="bg_curve1_left"></div>
    <div id="bg_curve2_left"></div>
    <div id="curve1_left">
      <div onClick={this.newPokemon} id="buttonGlass">
        <div id="reflect"> </div>
      </div>
      <div id="miniButtonGlass1"></div>
      <div id="miniButtonGlass2"></div>
      <div id="miniButtonGlass3"></div>
    </div>
    <div id="curve2_left">
      <div id="junction">
        <div id="junction1"></div>
        <div id="junction2"></div>
      </div>
    </div>
    <div id="screen">
      <div id="topPicture">
        <div id="buttontopPicture1"></div>
        <div id="buttontopPicture2"></div>
      </div>
      <div id="picture">
        <PokeSprite pokemon={this.state.pokemon} />
      </div>
      <div id="buttonbottomPicture"></div>
      <div id="speakers">
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
      </div>
    </div>
    <div id="bigbluebutton"></div>
    <div id="barbutton1"></div>
    <div id="barbutton2"></div>
    <div id="cross">
      <div id="leftcross">
        <div id="leftT"></div>
      </div>
      <div id="topcross">
        <div id="upT"></div>
      </div>
      <div id="rightcross">
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross">
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">

      <Screen pokemon={this.state.pokemon}/>

    <div id="blueButtons1">
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
    </div>
    <div id="blueButtons2">
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
    </div>
    <div id="miniButtonGlass4"></div>
    <div id="miniButtonGlass5"></div>
    <div id="barbutton3"></div>
    <div id="barbutton4"></div>
    <div id="yellowBox1"></div>
    <div id="yellowBox2"></div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
    );
  }
}

export default App;
