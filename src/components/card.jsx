import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import './card.css'

function Card({info, title}) {
  const [ display, setDisplay ] = useState(true);
  console.log(info);

  return (
    <div className="card">
      <div className="question">
        <h3>{ title }</h3>

        {
          display ? 
            <AiFillPlusCircle className="icon"onClick={()=>{ setDisplay(!display) }} /> 
          : 
            <AiFillMinusCircle className="icon"onClick={()=>{ setDisplay(!display) }} />
        }
        
      </div>
      <div className={
        display ? "answer" : "show"
      }>
        <p>{ info }</p>
      </div>
    </div>
  )
};
export default Card;