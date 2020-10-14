import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      budget: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArr => {
      const newSushiArr = sushisArr.map(sushiObj => {
        return {...sushiObj, isEaten: false}
      })
      this.setState({
        sushis: newSushiArr
      })
    })
  }

  ateSushi = (id, price) => {
   const updatedArr = this.state.sushis.map(sushiObj => {
      if (sushiObj.id === id){
        return {...sushiObj, isEaten: true}
      } else { return sushiObj}
    })
    this.setState({
      sushis: updatedArr,
      budget: this.state.budget - price
    })
  }

  nextFourSushis = () => {
    console.log("hit the next four function")
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)
    const emptyPlates = this.state.sushis.filter(sushiObj => sushiObj.isEaten === true)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} ateSushi={this.ateSushi} nextFourSushis={this.nextFourSushis} budget={this.state.budget}/>
        <Table emptyPlates={emptyPlates} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;