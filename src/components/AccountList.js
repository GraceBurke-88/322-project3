import React from 'react';
import { connect } from 'react-redux';
import {deleteAccount, selectAccount} from '../actions';


import AccountItem from './AccountItem';


class AccountList extends React.Component {

  deleteAccount = (account) => {
    this.props.deleteAccount(account._id);
  }

  selectAccount = (account) => {
    this.props.selectAccount(account._id);
  }


  render() {
    const taskItems = this.props.accounts.map(account => {
      return <AccountItem account={account} key={account._id} name={account._id} balance={account.balance} deleteAccount={this.deleteAccount} selectAccount={this.selectAccount} />
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

export default connect(mapStateToProps, { deleteAccount, selectAccount })(AccountList);