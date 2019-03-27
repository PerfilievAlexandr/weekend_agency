import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './style.css'

class NavBar extends Component {

    render() {
        return (
            <ul className='navigation'>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/creation'
                        activeClassName='navigation__link--active'
                    >Создать кролика</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/editing'
                        activeClassName='navigation__link--active'
                    >Редактировать кролика</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink
                        className='navigation__link'
                        to='/creationList'
                        activeClassName='navigation__link--active'
                    >Список кроликов</NavLink>
                </li>
            </ul>
        );
    };

}


export default withRouter(NavBar);