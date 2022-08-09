import React from 'react'

export interface JokesType{
    joke:string
}
const Card = ({joke}:JokesType) => {
  return (
    <div className='container--card'>{joke}</div>
  )
}

export default Card