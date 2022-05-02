import React from 'react';
import { connect } from 'react-redux';

import { addAccount} from "../actions";

class AddAccount extends React.Component {
    state = { name: '', balance: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name)
        console.log(this.state.balance)
        console.log(this.state)
        //this.props.stateList
        this.props.addAccount(this.state.name, parseInt(this.state.balance), this.props.stateList);
        this.setState({name:'', balance:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Balance</label>
                    <input type="number" className="form-control"
                           name="balance" value={this.state.balance}
                           onChange={(e) => this.setState({balance: e.target.value})} />
                </div>
                <input type="submit" className="btn btn-success" value={'Add'} />

            </form>
        )
    }
}

export default connect(null,{addAccount})(AddAccount);
