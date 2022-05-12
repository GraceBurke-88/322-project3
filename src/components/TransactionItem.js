import React from 'react';



const TransactionItem = props => {

    return (
        <li className="list-group-item" style={{}}>

            <br/> id: {props.transaction._id} \ type:{ props.transaction.type} \ amount: ${ props.transaction.amount} \ name:{ props.transaction.name}



        </li>
    )
};

export default TransactionItem;