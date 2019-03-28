import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRabbits} from '../../action-creators';
import {token, rabbitsList} from '../../selectors';
import Rabbit from '../rabbit'

class CreationList extends Component {

    render() {
        
        const {rabbitsData} = this.props;  

        const rabbits = rabbitsData.map((rabbit) => {
            return <li key = {rabbit.id} >
                <Rabbit 
                    rabbit = {rabbit}
                />
            </li> 
        })

        const rabbitList = (rabbitsData.length > 0) ? rabbits : null;

        return (
           <div>
               <button
                   onClick = {this.onHandleClick}
               >заполучить кроликов</button>
               {rabbitList}
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
        tokenData: token(store),
        rabbitsData: rabbitsList(store)
    }),
    {getRabbits}
)(CreationList)