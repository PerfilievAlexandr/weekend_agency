import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRabbits} from '../../action-creators';
import {token} from '../../selectors';

class CreationList extends Component {

    render() {
        return (
           <div>
               creationList
               <button
                   onClick = {this.onHandleClick}
               >заполучить кроликов</button>
           </div>
        );
    };

    onHandleClick = () => {
        const {getRabbits, tokenData} = this.props;

        getRabbits(tokenData);
    };

}


export default connect(
    (store) => ({
        tokenData: token(store)
    }),
    {getRabbits}
)(CreationList)