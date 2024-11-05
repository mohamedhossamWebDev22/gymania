import React from 'react'

const PriceCard = (props) => {
  return (
    <>
      <div className="priceCard">
        <h2>{props.price} $</h2>
        <div className="info">
          <p>{props.num} Months</p>
          <ul>
            <li>Guide</li>
            <li>Fitness</li>
            <li>Coach</li>
            <li>Spa</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PriceCard