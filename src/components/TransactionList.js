import React from 'react';
import { connect } from 'react-redux';
import {deleteAccount, selectAccount} from '../actions';
import TransactionItem from "./TransactionItem";



class TransactionList extends React.Component {

    render() {
        const transactionItems = this.props.transactions1.map(transaction => {
            return <TransactionItem transaction={transaction}  />
        });

        return (
            <ul className="task-list list-group">
                { transactionItems }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        transactions1: state.transactions
    };
}

export default connect(mapStateToProps, { deleteAccount, selectAccount })(TransactionList);