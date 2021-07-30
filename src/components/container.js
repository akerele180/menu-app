import React from 'react';
import menu from '../data';
import './container.css';

export default function Container() {
  console.log(menu)
  return (
    <main>
    {
      menu.map(({id, title, price, desc, img, ...rest})=>{
        return(
          <div key={id} className='container'>
            <div className='image'>
              <img src={img} alt={title} />
            </div>
            <div className='info'>
              <div>
                <h3>{title}</h3>
                <h3 className='price'>${price}</h3>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        )
        
      })
    }
    </main>
  )
}