import React from 'react';
import './ItemCount.css';
import { Card, Button} from 'react-bootstrap';


class ItemCount extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };

        this.upLimit = 50
        this.downLimit = 0
        
        this.handlerCounterUp = this.handlerCounterUp.bind(this)
        this.handlerCounterDown = this.handlerCounterDown.bind(this)
    }

    handlerCounterUp(){
        if (this.state.counter<this.upLimit){
            this.setState({counter: this.state.counter + 1})
        }
    }

    handlerCounterDown(){
        if (this.state.counter>this.downLimit){
            this.setState({counter: this.state.counter - 1})
        }
    }

    render(){
        return <Card style={{ width: '18rem' }}>
    <Card.Body class = "buttonContainer">
        <Button onClick={this.handlerCounterDown} variant="dark">-</Button>{' '}
        <h5>{this.state.counter}</h5>
        <Button onClick={this.handlerCounterUp} variant="dark">+</Button>{' '}
    </Card.Body>
    </Card>};
    }
    
export default ItemCount;