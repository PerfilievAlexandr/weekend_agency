import React, {Component} from 'react';
import './style.css'

class Rabbit extends Component {

    render() {

        const {rabbit} = this.props;

        return (
           <div className = 'rabbit'>
               <p className = 'rabbit__id'>id: {rabbit.id}</p>
               <p className = 'rabbit__name'>Имя: {rabbit.name}</p>
               <p className = 'rabbit__weight'>Вес: {rabbit.weight}</p>
           </div>
        );
    };

}


export default Rabbit