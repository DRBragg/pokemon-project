import React from 'react';

const Screen = (props) => {
  return(
    <div id="stats">
      <strong>Name :</strong> {props.pokemon.name}<br/>
      <strong>Type :</strong> {props.pokemon.type}<br/>
      <strong>Height :</strong> {props.pokemon.height}<br/>
      <strong>Weight :</strong> {props.pokemon.weight}<br/><br/>
      <strong>The {props.pokemon.genusName} Pokemon</strong><br/>
      {props.pokemon.flavorText}
  </div>
  )
}

export default Screen
