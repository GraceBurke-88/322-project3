import React from 'react';



const TransactionItem = props => {

    return (
        <li className="list-group-item" style={{}}>

            <br/> Transaction:{ props.transactions1}

        </li>
    )
};

export default TransactionItem;