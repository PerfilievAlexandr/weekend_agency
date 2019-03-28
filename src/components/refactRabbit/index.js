import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";
import {token} from "../../selectors";
import {refactSelectRabbit} from "../../action-creators";

class RefactRabbit extends Component {

    state = {
        name: '',
        weight: ''
    };

    render() {

        const {rabbit} = this.props;

        return (
            <div className='refactRabbit'>
                <p className='refactRabbit__title'>Отредактируем кролика по имени: {rabbit.name},
                    весом: {rabbit.weight} </p>
                <label htmlFor="refactRabbitName">
                    новое имя:
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
                    новый вес
                    <input
                        type="text"
                        placeholder='имя'
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
        );
    };

    onHandleChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    };

    onHandleChangeWeight = (evt) => {
        this.setState({
            weight: evt.target.value
        })
    };

    onRefactRabbit = (evt) => {

        evt.preventDefault();

        const {refactSelectRabbit, tokenData, rabbit} = this.props;

        if (this.state.name && this.state.weight) {
            refactSelectRabbit(this.state, rabbit.id, tokenData);
        }

        this.setState({
            name: '',
            weight: ''
        });
    };

}


export default connect(
    (store) => ({
        tokenData: token(store),
    }),
    {refactSelectRabbit}
)(RefactRabbit)