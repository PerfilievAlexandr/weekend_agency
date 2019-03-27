import React, {Component} from 'react';
import NavBar from '../navBar'
import Authorization from '../authorization'
import './style.css';
import { withRouter } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <section className="header">
                <div className="header__wrapper">
                    <NavBar />
                    <button>Авторизация</button>
                </ div>
                <Authorization />
            </section>
        );
    };

}


export default withRouter(Header);