import React from 'react'

const VerCard = (props) => {
  return (
    <>
      <div style={{flexDirection: props.dir}} className="VerCard">
        <img src={props.src} alt="" />
        <div className="txt">
          <p>{props.txt}</p>
        </div>
      </div>
    </>
  )
}

export default VerCard