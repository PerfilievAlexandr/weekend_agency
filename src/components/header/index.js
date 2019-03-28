import React, {Component} from 'react';
import NavBar from '../navBar'
import Authorization from '../authorization'
import './style.css';
import {withRouter} from 'react-router-dom';
import {OpenCloseAuthorization} from '../../action-creators';
import {connect} from 'react-redux';
import {authorizationOpen, logIn} from '../../selectors'


class Header extends Component {

    render() {

        const {openModalAuth, log} = this.props;

        const authorization = openModalAuth ? <Authorization/> : null;

        let btnText = log ? 'Выйти' : 'Войти'

        return (
            <section className="header">
                <div className="header__wrapper">
                    <NavBar/>
                    <button
                        className="header__authorization-open  btn"
                        onClick={this.onChange}
                    >{btnText}
                    </button>
                </ div>
                {authorization}
            </section>
        );
    };

    onChange = () => {
        const {OpenCloseAuthorization} = this.props;
        OpenCloseAuthorization();
    };

}


export default withRouter(connect((store) => ({
        log: logIn(store),
        openModalAuth: authorizationOpen(store)
    }),
    {OpenCloseAuthorization})(Header));