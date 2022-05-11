import React from 'react';
//import { deleteAccount } from "../actions";
import {connect} from 'react-redux';
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
//import {selectAccount} from "../actions";
import AccountList from "./AccountList";



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

        <Withdraw/>


      <button type="button"
              onClick={() => props.deleteAccount(props.account)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
      </button>
        </li>

  )
};

export default AccountItem;