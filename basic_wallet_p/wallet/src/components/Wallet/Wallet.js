import React from 'react';
import axios from "axios";

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chain: null,
      id: ""
     }
  }

  componentDidMount = () => {
  axios.get("http://localhost:5000/chain").then(res => {
    debugger
    this.setState({chain: res.data.chain})
  })
  }

  handleChange = (e) => {
    this.setState({id: e.target.value})
  };

  render() { 
    return ( <div>
      <input value={this.state.id} onChange={this.handleChange} type="number" />
      {this.state.chain ? this.state.map(item => <p>{item.id}</p>) : null}

    </div> );
  }
}
 
export default Wallet;