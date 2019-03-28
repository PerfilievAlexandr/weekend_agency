import React, {Component} from 'react';
import './style.css'

class Rabbit extends Component {

    render() {

        const {rabbit} = this.props;

        return (
           <div className = 'rabbit'>
               <p className = 'rabbit__id'>{rabbit.id}</p>
               <p className = 'rabbit__name'>{rabbit.name}</p>
               <p className = 'rabbit__weight'>{rabbit.weight}</p>
           </div>
        );
    };

}


export default Rabbit