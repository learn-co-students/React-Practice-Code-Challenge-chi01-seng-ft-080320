import React, { Component } from 'react';
import SushiWalletForm from './components/SushiWalletForm';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArr: [],
    startIndex: 0,
    eatenSushis: [],
    budget: 138
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiArr => this.setState({
        sushiArr: sushiArr.map(sushiObj => {
          return {
            ...sushiObj,
            eaten: false
          }
        })
      }) 
    );
  }

  showFourSushis = () => {
    return this.state.sushiArr.slice(this.state.startIndex, this.state.startIndex + 4)
  }

  handleMoreBtn = () => {
    let sushiArrLength = this.state.sushiArr.length
    let startIndex = this.state.startIndex
    const index = ( (startIndex + 4) >= sushiArrLength ) ? 0 : startIndex + 4 

    this.setState({startIndex: index})
  }

  handleEatSushi = (id, price) => {
    const updatedSushiArr = this.state.sushiArr.map(sushiObj => {
      if (sushiObj.id === id) {
        return {
          ...sushiObj,
          eaten: true
        }
      }
      else {
        return sushiObj
        }
      }
    )
    const updatedEatenSushis = [...this.state.eatenSushis, id]
    if(this.state.budget < price){
      alert('Add more money to your account!')
      return
    }
    const updatedBudget = this.state.budget - price
    this.setState({
      sushiArr: updatedSushiArr,
      eatenSushis: updatedEatenSushis,
      budget: updatedBudget
    })
  }

  handleAddMoney = (e) => {
    e.preventDefault()
    let addedMoney = parseInt(e.target['budget'].value)
    this.setState(prevState => {
      return {budget: parseInt(prevState.budget) + addedMoney}
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushiArr={this.showFourSushis()}
          handleMoreBtn={this.handleMoreBtn}
          handleEatSushi={this.handleEatSushi}
        />
        <Table 
          eatenSushis={this.state.eatenSushis}
          budget={this.state.budget}
        />
        <div className="form">
          <SushiWalletForm 
          handleAddMoney={this.handleAddMoney}
          />
        </div>
      </div>
    );
  }
}

export default App;