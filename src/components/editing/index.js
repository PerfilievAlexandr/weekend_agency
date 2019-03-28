import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {createRabbit} from '../../action-creators';
import {token, rabbitsList} from "../../selectors";
import RefactRabbit from '../refactRabbit'

class Editing extends Component {

    render() {

        const {rabbits} = this.props;

        const rabbitsList = rabbits.map((rabbit) => {
            return <li
                className='editing-rabbit__item'
                key={rabbit.id}
            >
                <RefactRabbit
                    rabbit = {rabbit}
                />
            </li>
        });

        const rabbitsLoaded = (rabbits.length > 0) ?
            rabbitsList
            :
            <h3
                className='editing-rabbit__title'
            >Обновите список кроликов</h3>;

        return (
            <section className='editing-rabbit'>
                <div className='editing-rabbit__wrapper'>
                    {rabbitsLoaded}
                </div>
            </section>
        );
    };
}


export default connect(
    (store) => ({
        tokenData: token(store),
        rabbits: rabbitsList(store)
    }),
    {createRabbit}
)(Editing)