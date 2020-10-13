import React, { Component } from 'react'

class SushiWalletForm extends Component {

  render() {
    return (
      <form 
        onSubmit={(e) => this.props.handleAddMoney(e)}>
        <label>SushiWallet</label>
        <input
          placeholder="$" 
          name="budget"
          type="number"
        />
        <input
          name="Add Money"
          value="Add Money"
          type="submit"
        />
      </form>
    )
  }
}

export default SushiWalletForm