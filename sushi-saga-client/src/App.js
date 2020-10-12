import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushiData: [],
    eatenSushis: [],
    firstIndex: 0,
    budget: 138
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushiData: data}) );
  }

  handleMoreBtn = () => {
    this.setState({firstIndex: this.state.firstIndex + 4})
  }

  handleEatSushi = (sushiId, sushiPrice) => {
    //console.log('cliked plate');
   // console.log(sushiObj);
    let updatedEatenSushiIds = [...this.state.eatenSushis, sushiId]
    let updatedBudget = this.state.budget - sushiPrice
    this.setState({
      eatenSushis: updatedEatenSushiIds,
      budget: updatedBudget
    })
  }


  render() {
  const sushisToShow = this.state.sushiData.slice(this.state.firstIndex, this.state.firstIndex + 4)
    return (
      <div className="app">
        <SushiContainer 
          sushis={sushisToShow} 
          eatenSushis={this.state.eatenSushis} 
          handleMoreBtn={this.handleMoreBtn} 
          handleEatSushi={this.handleEatSushi}
        />
        <Table 
          budget={this.state.budget} 
          eatenSushis={this.state.eatenSushis}
        />
      </div>
    );
  }
}

export default App;