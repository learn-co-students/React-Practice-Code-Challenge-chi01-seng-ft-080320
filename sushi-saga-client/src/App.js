
import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state= {
      sushis: [], 
      sushiIndex : 0, 
      plates: [], 
      cash: 100
    }
  }
  
  fourSushis = () => {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  moreSushis = () => {
    let sushiLength = this.state.sushis.length
    let sushiIndex = this.state.sushiIndex
    if(sushiIndex >= sushiLength || (sushiIndex + 4) > sushiLength ) {
      this.setState( {
        sushiIndex : 0
      })
    }
    else {
      this.setState ( {
        sushiIndex : this.state.sushiIndex + 4
      })
    }

  }

  eatenSushi = (sushi) =>{
    let newPlates = this.state.plates
    let cost = 0
    let eatenSushi = this.state.sushis.map(element => {
      if( element.id === sushi.id && sushi.price <= this.state.cash) {
        if(!element.eaten){
          cost += sushi.price
          newPlates.push(1)
          element.eaten = true
        }
         return element
      }
      else {
        return element
      }
    })
   
    this.setState( {
      sushi : eatenSushi, 
      plates: newPlates, 
      cash: this.state.cash - cost
    })
  }

  moreCash = () => {
    console.log("MORE CASH ")
    this.setState(prevState => {
      return {
        cash: prevState.cash + 10
      }
    })
  }


  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then((response) => {
      this.setState({
        sushis: response
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.fourSushis()} eatenSushi = {this.eatenSushi} moreSushis = {this.moreSushis}  moreCash = {this.moreCash}/>
        <Table plates= {this.state.plates} cash= {this.state.cash}/>
      </div>
    );
  }
}

export default App;