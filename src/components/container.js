import React from 'react';
import Card from './card';
import './container.css';
import questions from '../data';


function Container() {
  
  return (
    <div className="container">
      <div className="text-side">
        <h2>questions and answers about login...</h2>
      </div>
      <div className="q-and-a">
        {
          questions.map(({id, ...other})=>{
            console.log(id)
            return(
              <Card key={ id } {...other}/>
            )
          })
          
        }
        
      </div>
    </div>
  )
}
export default Container;