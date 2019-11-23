import React from 'react';
import './card.style.css'

export const Card = props => 
  <div className="card">
    <h1>{props.children}</h1>
  </div>