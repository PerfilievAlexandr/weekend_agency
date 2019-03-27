import React, {Component} from 'react'
import './style.css'



class Authorization extends Component {
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
                </div>
            </div>
        );
    };
}


export default Authorization