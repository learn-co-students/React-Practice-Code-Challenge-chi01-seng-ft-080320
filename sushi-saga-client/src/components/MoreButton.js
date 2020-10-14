import React from 'react'

class MoreButton extends React.Component {

  handleClick = () => {
    console.log("hit the handleclick")
    this.props.nextFourSushis()
  }

  render(){
    return <button onClick={this.handleClick}>
            More sushi!
          </button>
  }        
}

export default MoreButton