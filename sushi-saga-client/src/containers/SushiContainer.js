import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  
  renderSushi = () => {
    return this.props.sushis.map(sushiObj => {
      return <Sushi sushi={sushiObj} ateSushi={this.props.ateSushi} budget={this.props.budget}/>
    })
  }

  render(){
    return (
    
        <div className="belt">
          {this.renderSushi()}
          <MoreButton nextFourSushis={this.props.nextFourSushis}/>
        </div>
    )
  }
}

export default SushiContainer