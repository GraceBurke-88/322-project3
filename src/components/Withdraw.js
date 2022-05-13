
import React from 'react';
import { connect } from 'react-redux';

import { addTransactions,withdraw } from "../actions";

class Withdraw extends React.Component {
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
        this.props.withdraw(this.state._id, parseInt(this.state.amount));
        this.props.addTransactions('withdraw', parseInt(this.state.amount), this.state.name)
        console.log(this.state)
        //console.log(parseInt(this.state.amount));
        this.setState({amount:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group" style={{maxWidth:"200px"}}>
                    <label>Withdraw Name</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})} />
                    <label>Withdraw Amount</label>
                    <input  type="number" step="0.1" className="form-control"
                            name="amount" value={this.state.amount}
                            onChange={(e) => this.setState({amount: e.target.value})} />
                </div>
                <input type="submit" className="btn btn-success" value={'Submit'} />
            </form>

        )
    }


}

export default connect(null,{ addTransactions,withdraw })(Withdraw);

