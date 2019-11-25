import React from 'react';
import './card.style.css'

export const Card = ({monster}) => 
  <div className="card">
    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name} />
    <h1>{monster.name}</h1>
  </div>