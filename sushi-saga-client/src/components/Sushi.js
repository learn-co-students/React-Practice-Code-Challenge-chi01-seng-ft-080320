import React, { Fragment } from 'react'

const Sushi = (props) => {
  //console.log(props);
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEatSushi(props.id, props.price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          /* if eaten = false, show image */ 
          /* else do not show image */
          props.eaten ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}


export default Sushi