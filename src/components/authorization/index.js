import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {OpenCloseAuthorization, authorize} from '../../action-creators';


class Authorization extends Component {

    state = {
        name: '',
        password: ''
    };

    render() {

        return (
            <div className='authorization'>
                <div className='authorization__container'>
                    <button
                        className='authorization__close'
                        onClick={this.onChange}
                    >закрыть
                    </button>
                    <h2 className='authorization__title'>Авторизация</h2>
                    <label htmlFor="authorizationName"><strong>Логин</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeName}
                            id='authorizationName'
                            name='authorizationName'
                            value={this.state.name}
                            placeholder='omar5'
                            required
                        />
                    </label>
                    <label htmlFor="movieFormIDTitle"><strong>Пароль</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangePass}
                            id='authorizationPass'
                            name='authorizationPass'
                            value={this.state.password}
                            placeholder='lobster5'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className="authorization__send-form  btn"
                        onClick={this.onLogIn}
                    >
                        Войти
                    </button>
                </div>
            </div>
        );

    };

    onHandleChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    };

    onHandleChangePass = (evt) => {
        this.setState({
            password: evt.target.value
        })
    };

    onChange = () => {
        const {OpenCloseAuthorization} = this.props;
        OpenCloseAuthorization();
    };

    onLogIn = (evt) => {

        evt.preventDefault();

        const {OpenCloseAuthorization, authorize} = this.props;

        if (this.state.name && this.state.password) {
            authorize(this.state);
            OpenCloseAuthorization();
        }


        this.setState({
            name: '',
            password: ''
        });


    };
}


export default connect(null, {OpenCloseAuthorization, authorize})(Authorization)