import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRabbits} from '../../action-creators';
import {rabbitsList, logIn} from '../../selectors';
import Rabbit from '../rabbit';
import './style.css';

class CreationList extends Component {

    render() {

        const {rabbitsData, log} = this.props;

        const rabbits = rabbitsData.map((rabbit) => {
            return <li
                key={rabbit.id}
                className='rabbitsList__item'
            >
                <Rabbit
                    rabbit={rabbit}
                />
            </li>
        });

        let main = log ?
            <button
                className='rabbitsList__refresh  btn'
                onClick={this.onHandleClick}
            >Обновить кроликов
            </button>
            :
            <h3
                className='rabbitsList__title'
            >Для начала зарегистрируйтесь</h3>;

        const rabbitList = (rabbitsData.length > 0) ? rabbits : null;

        return (
            <section className='rabbitsList'>
                <div className='rabbitsList__wrapper'>
                    {main}
                    <div className='rabbitsList__rabbits-container'>
                        {rabbitList}
                    </div>
                </div>
            </section>

        );
    };

    onHandleClick = () => {
        const {getRabbits} = this.props;

        getRabbits();
    };

}


export default connect(
    (store) => ({
        rabbitsData: rabbitsList(store),
        log: logIn(store)
    }),
    {getRabbits}
)(CreationList)