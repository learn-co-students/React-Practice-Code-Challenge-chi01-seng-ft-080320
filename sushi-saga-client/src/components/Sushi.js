import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name, price, img_url, eaten, id} = props.sushiObj
  //console.log(id);
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEatSushi(id, price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi