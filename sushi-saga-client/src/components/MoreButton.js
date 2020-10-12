import React from 'react'

const MoreButton = (props) => {
 // console.log(props, 'inside MoreButton');
    return <button onClick={props.handleMoreBtn}>
            More sushi!
          </button>
}

export default MoreButton