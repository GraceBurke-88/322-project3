

import React from 'react';
import { connect } from 'react-redux';

import {addTransactions, deposit} from "../actions";

class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.accounts._id,
            amount: ''
            //console.log('hello')
            //this.state = { _id: 1 };
            // console.log(this.state)
        }
    }

    onFormSubmit = (event) => {
        //console.log(this.state)
        event.preventDefault();
        this.props.deposit(this.state._id, parseFloat(this.state.amount));
        this.props.addTransactions(0,'deposit', parseFloat(this.state.amount), this.state.name, this.state._id)

        console.log(this.state)
        //console.log(parseInt(this.state.amount));
        this.setState({amount:'', name:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>

                <div className="form-group" style={{maxWidth:"200px"}}>
                    <label>Deposit Name</label>
                    <input type="text" className="form-control"
                           name="title" value={this.state.title}
                           onChange={(e) => this.setState({name: e.target.value})} />
                    <label>Deposit Amount</label>
                    <input  type="number" step="any" className="form-control"
                           name="amount" value={this.state.amount}
                           onChange={(e) => this.setState({amount: e.target.value})} />

                </div>
                <input type="submit" className="btn btn-success" value={'Submit'} />

            </form>
        )
    }


}

export default connect(null,{ deposit, addTransactions })(Deposit);


