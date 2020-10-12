import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 //console.log(props.eatenSushis, 'inside sushiContainer');
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushiObj => {
          let eaten = props.eatenSushis.includes(sushiObj.id)

          return <Sushi {...sushiObj} eaten={eaten} handleEatSushi={props.handleEatSushi} key={sushiObj.id}/>  
         })
        }
        <MoreButton handleMoreBtn={props.handleMoreBtn}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer