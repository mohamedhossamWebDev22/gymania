import React from 'react'
import Icon from './Icon'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <Icon icon={props.icon}/>
        <p>{props.txt}</p>
      </div>
    </div>
  )
}

export default Card