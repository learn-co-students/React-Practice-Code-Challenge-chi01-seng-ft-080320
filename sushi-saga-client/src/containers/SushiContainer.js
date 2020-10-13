import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //console.log(props.sushiArr);
  return (
    <Fragment>
      <div className="belt">
        {
        props.sushiArr.map((sushiObj, idx) => {
          return <Sushi key={idx} sushiObj={sushiObj} handleEatSushi={props.handleEatSushi} />
        })
        }
        <MoreButton handleMoreBtn={props.handleMoreBtn} />
      </div>
    </Fragment>
  )
}

export default SushiContainer