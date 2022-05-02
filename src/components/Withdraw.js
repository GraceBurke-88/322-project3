import React from 'react';
import { connect } from 'react-redux';

import { addAccount} from "../actions";

class Withdraw extends React.Component {
    state = { name: '', balance: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state.name, parseInt(this.state.balance), this.props.stateList);
        this.setState({name:'', balance:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group" style={{maxWidth:"200px"}}>
                    <label>Withdraw</label>
                    <input type="number" className="form-control"
                           name="balance" value={this.state.balance}
                           onChange={(e) => this.setState({balance: e.target.value})} />
                </div>
                <input type="submit" className="btn btn-success" value={'Add'} />

            </form>
        )
    }
}

export default connect(null,{addAccount})(Withdraw);
