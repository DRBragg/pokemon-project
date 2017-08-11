import React from 'react';

const PokeSprite = (props) => {
  return (
    <img src={props.pokemon.sprite} alt={props.pokemon.name} height="200" />
  )
}

export default PokeSprite
