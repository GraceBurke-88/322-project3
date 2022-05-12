import React from 'react';
import { connect } from 'react-redux';
import {deleteAccount, selectAccount} from '../actions';
import TransactionItem from "./TransactionItem";



class TransactionList extends React.Component {

    render() {
        const transactionItems = this.props.transactions.map(transaction => {
            return <TransactionItem transaction={transaction} key={transaction._id} name={transaction.name} />
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
        transactions: state.transactions
    };
}

export default connect(mapStateToProps, { deleteAccount, selectAccount })(TransactionList);