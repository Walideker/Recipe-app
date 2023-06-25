import React from 'react'

export default function Recipe({title,image ,calories,ingredients}) {
  return (
    <div className='text-center ' >
        <h1 className='mt-4'>{title}</h1>
        <img className='m-2' src={image} alt="" />
        {ingredients.map(Element =>(
          <ul className='list-group'>
          <li className='list-group-item list-group-item-success '>{Element.text}</li>
          </ul>
        ))}
        <h2>{Math.floor(calories)} kc</h2>
    </div>
  )
}
