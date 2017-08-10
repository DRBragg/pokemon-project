import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: {
        name: "Pikachu",
        type: "Electric",
        height: 4,
        weight: 60,
        genusName: "Mouse",
        flavorText: "When several of these POKéMON gather, their electricity couldbuild and cause lightning storms.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      }
    }
  }

  render() {
    return (
      <div id="pokedex">
  <div id="left">
    <div id="logo"></div>
    <div id="bg_curve1_left"></div>
    <div id="bg_curve2_left"></div>
    <div id="curve1_left">
      <div id="buttonGlass">
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
        <img src={this.state.pokemon.sprite} alt={this.state.pokemon.name} height="200" />
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
