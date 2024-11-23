import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render(){
        return (
            <div className='tc'>
                <h1>Hello!</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;