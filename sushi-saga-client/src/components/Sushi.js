import React, { Component } from 'react'

class Sushi extends Component {

  handleClick = () => {
    this.props.ateSushi(this.props.sushi.id, this.props.sushi.price)
  }

  handleBudgetClick = () => {
  if (this.props.budget > this.props.sushi.price){
    this.handleClick()
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleBudgetClick}>
          { this.props.sushi.isEaten ? null : <img src={this.props.sushi.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }  
}

export default Sushi