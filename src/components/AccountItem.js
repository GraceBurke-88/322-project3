import React from 'react';
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

const AccountItem = props => {

    return (
    <li className="list-group-item" style={{}}>

        <button type="button"
                onClick={() => props.selectAccount(props.account)}
                className="btn btn-link" style={{  }}>
            <h3>{ props.account.name }</h3>
        </button>

        <br/> Balance:{ props.account.balance }

        <Deposit accounts={props.account} />

        <Withdraw accounts={props.account} />


      <button type="button"
              onClick={() => props.deleteAccount(props.account)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Delete
      </button>
        </li>

  )
};

export default AccountItem;