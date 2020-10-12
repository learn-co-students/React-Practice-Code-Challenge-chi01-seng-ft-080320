import React from 'react'

const MoreButton = (props) => {
    return (
      <div>
        <button onClick={props.moreSushis}>
         More sushi!
        </button>
        <button onClick={props.moreCash}>
         More cash!
        </button>
      </div>

    )
}

export default MoreButton