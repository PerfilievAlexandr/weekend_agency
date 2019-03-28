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
                key={rabbit.id}
            >
                <RefactRabbit
                    rabbit = {rabbit}
                />
            </li>
        });

        return (
            <div className='editing-rabbit'>
                {rabbitsList}
            </div>
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