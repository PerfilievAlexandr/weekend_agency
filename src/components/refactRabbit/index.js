import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";
import {refactSelectRabbit} from "../../action-creators";
import {numbers} from '../../utils'

class RefactRabbit extends Component {

    state = {
        name: '',
        weight: ''
    };

    render() {

        const {rabbit} = this.props;

        return (
            <section className='refactRabbit'>
                <div className='refactRabbit__wrapper'>
                    <h3 className='refactRabbit__title'>Отредактируем кролика по имени: {rabbit.name},
                        весом: {rabbit.weight} </h3>
                    <label htmlFor="refactRabbitName">
                        <strong>новое имя:</strong>
                        <input
                            type="text"
                            placeholder='имя'
                            name='refactRabbitName'
                            id='refactRabbitName'
                            value={this.state.name}
                            onChange={this.onHandleChangeName}
                        />
                    </label>
                    <label htmlFor="refactRabbitWeight">
                        <strong>новый вес:</strong>
                        <input
                            type="text"
                            placeholder='вес'
                            name='refactRabbitWeight'
                            id='refactRabbitWeight'
                            value={this.state.weight}
                            onChange={this.onHandleChangeWeight}
                        />
                    </label>
                    <button
                        type='submit'
                        className="refactRabbit__sent  btn"
                        onClick={this.onRefactRabbit}
                    >
                        Отредактировать
                    </button>
                </div>
            </section>

        );
    };

    onHandleChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    };

    onHandleChangeWeight = (evt) => {
        this.setState({
            weight: numbers(evt.target.value)
        })
    };

    onRefactRabbit = (evt) => {

        evt.preventDefault();

        const {refactSelectRabbit, rabbit} = this.props;

        if (this.state.name && this.state.weight) {
            refactSelectRabbit(this.state, rabbit.id);
        }

        this.setState({
            name: '',
            weight: ''
        });
    };

}


export default connect(
    null,
    {refactSelectRabbit}
)(RefactRabbit)