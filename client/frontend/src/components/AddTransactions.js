import React, { Component} from 'react'
import axios from 'axios'
import LandingPage from './LandingPage';


export default class AddTransactions extends Component {
  
  constructor() {
    super();
    this.state = {
      payer: "",
      points: "",
      timestamp: "",
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8080/transactions", this.state)
    return <LandingPage/>
  }

  render() {
    const{payer, points, timestamp} = this.state
    return (
      <div className="row">
      <form className="col s12" onSubmit={this.handleFormSubmit}>
          <h5>Enter the new transaction below. Then click the submit button.</h5>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" className="validate" name="payer" value={payer} onChange={this.changeHandler}/>
            <label htmlFor="payer">Payer</label>
          </div>
        </div>
          <br/>
        <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input  type="text" className="validate" name="points" value={points} onChange={this.changeHandler}/>
            <label htmlFor="payer">Points</label>
          </div>
          </div>
          <br/>
        <div className="row">
          <div className="input-field col s6">
            <input  type="text" className="validate" name="timestamp" value={timestamp} onChange={this.changeHandler}/>
            <label htmlFor="payer">Timestamp</label>
          </div>
          </div>
          <br/>
        <div className="row">
          <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
        </div>
        </div>
      </form>
    </div>
  )
  }

}

