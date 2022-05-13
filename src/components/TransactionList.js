import React from 'react';
import { connect } from 'react-redux';
import {selectAccount} from '../actions';
import TransactionItem from "./TransactionItem";



class TransactionList extends React.Component {
    selectAccount = (transactions, accounts) => {
        this.props.selectAccount(transactions.accountId);
        console.log(this.props.accounts[transactions.accountId-1]);
        return this.props.accounts[transactions.accountId-1];
    }

    render() {
        const transactionItems = this.props.transactions.map(transaction => {
            return <TransactionItem transaction={transaction} key={transaction._id} name={transaction.name} selectAccount={this.selectAccount} />
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
        transactions: state.transactions,
        accounts: state.accounts
    };
}

export default connect(mapStateToProps, { selectAccount })(TransactionList);