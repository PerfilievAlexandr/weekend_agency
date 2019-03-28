import React, {Component} from 'react';
import './style.css';
import {deleteRabbit} from '../../action-creators';
import {connect} from "react-redux";
import {token} from "../../selectors";


class Rabbit extends Component {

    render() {

        const {rabbit} = this.props;

        return (
           <div className = 'rabbit'>
               <div className='rabbit__wrapper'>
                   <p className = 'rabbit__id'>id: {rabbit.id}</p>
                   <p className = 'rabbit__name'>Имя: {rabbit.name}</p>
                   <p className = 'rabbit__weight'>Вес: {rabbit.weight}</p>
               </div>
               <button
                   className='rabbit__delete  btn'
                   onClick={this.onDeleteRabbit}
               >удалить</button>
           </div>
        );
    };

    onDeleteRabbit = () => {
        const {rabbit, deleteRabbit, tokenData} = this.props;
        deleteRabbit(rabbit, tokenData)
    }
}

export default connect(
    (store) => ({
        tokenData: token(store),
    }),
    {deleteRabbit}
)(Rabbit)