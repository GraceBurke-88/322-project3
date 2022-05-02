import React from 'react';
import {deleteAccount} from "../actions";

const AccountItem = props => {
  return (

    <li className="list-group-item" style={{}}>
      <h3>{ props.account.name }</h3>
      <br/> Balance: <n/>
      { props.account.balance }
      <button type="button"
              onClick={() => props.deleteAccount(props.account)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
      </button>
        </li>

  )
};

export default AccountItem;