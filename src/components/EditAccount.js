import React from 'react';
import { connect } from 'react-redux';

import { editAccount} from "../actions";

class EditAccount extends React.Component {
    state = { id:'', name: '', balance: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.editAccount(this.state.id, this.state.name, parseFloat(this.state.balance));
        this.setState({id: '',name:'', balance:''});
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Id</label>
                    <input type="number" className="form-control"
                           name="id" value={this.state.id}
                           onChange={(e) => this.setState({id: e.target.value})} />
                </div>
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
                <input type="submit" className="btn btn-success" value={'Edit'} />

            </form>
        )
    }
}

export default connect(null,{ editAccount })(EditAccount);
