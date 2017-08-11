import React from 'react';

const Screen = (props) => {
  let capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let typesNames = props.pokemon.types.map(pokemon => capatalize(pokemon.type.name))
  let typesString = typesNames.join("/")


  return(
    <div id="stats">
      <strong>Name :</strong> {capatalize(props.pokemon.name)}<br/>
      <strong>Type :</strong> {typesString}<br/>
      <strong>Height :</strong> {(props.pokemon.height/10).toFixed(1)}m<br/>
      <strong>Weight :</strong> {(props.pokemon.weight/10).toFixed(1)}kg<br/><br/>
      <strong>The {props.pokemon.genusName} Pokemon</strong><br/>
      {props.pokemon.flavorText.replace(/\\[a-z]/, " ")}
  </div>
  )
}

export default Screen
