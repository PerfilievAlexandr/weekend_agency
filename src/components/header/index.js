import React, {Component} from 'react';
import NavBar from '../navBar'
import Authorization from '../authorization'
import './style.css';
import {withRouter} from 'react-router-dom';
import {OpenCloseAuthorization} from '../../action-creators';
import {connect} from 'react-redux';
import {authorizationOpen} from '../../selectors'


class Header extends Component {

    render() {

        const {openModalAuth} = this.props;

        const authorization = openModalAuth ? <Authorization/> : null;

        return (
            <section className="header">
                <div className="header__wrapper">
                    <NavBar/>
                    <button
                        className="header__authorization-open  btn"
                        onClick={this.onChange}
                    >Авторизация
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
        openModalAuth: authorizationOpen(store)
    }),
    {OpenCloseAuthorization})(Header));