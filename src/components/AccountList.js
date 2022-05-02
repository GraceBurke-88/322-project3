import React from 'react';
import { connect } from 'react-redux';
import {deleteAccount, markDone} from '../actions';


import AccountItem from './AccountItem';

class AccountList extends React.Component {

  deleteAccount = (account) => {
    this.props.deleteAccount(account._id);
  }

  render() {
    const taskItems = this.props.accounts.map(account => {
      return <AccountItem account={account} key={account._id} deleteAccount={this.deleteAccount} />
    });

    return (
      <ul className="task-list list-group">
          { taskItems }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
}

export default connect(mapStateToProps, { deleteAccount })(AccountList);