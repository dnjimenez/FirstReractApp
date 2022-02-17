import React from 'react';
import './ItemCount.css';
import { Card, Button} from 'react-bootstrap';


class ItemCount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
        
        // this.upLimit = this.props.stock //lo levanta si hay un cambio cuando esta react corriendo
        this.downLimit = 0

        this.handlerCounterUp = this.handlerCounterUp.bind(this)
        this.handlerCounterDown = this.handlerCounterDown.bind(this)
    }
    

    handlerCounterUp(){
        // console.log(`stock:${this.props.stock}`)
        // console.log(`uplimit:${this.upLimit}`)
        if (this.state.counter<this.props.stock){
            this.setState({counter: this.state.counter + 1})
        }
    }

    handlerCounterDown(){
        if (this.state.counter>this.downLimit){
            this.setState({counter: this.state.counter - 1})
        }
    }

    onAdd = (event) => {
        this.props.parentCallback(this.state.counter);
        // console.log(this.state.counter)
        event.preventDefault();
    }

    render(){
        return <form class = 'itemCounter' onSubmit= {this.onAdd}>
                <Button onClick={this.handlerCounterDown} type='submit'className= 'counterButton' style={{padding:0}}variant="dark">-</Button>{' '}
                {/* mejorar esto porque esta horrendo */}
                <h5>{this.state.counter}</h5> 
                <Button onClick={this.handlerCounterUp} type = 'submit' className= 'counterButton' style={{padding:0}} variant="dark">+</Button>{' '}
            </form>
            // <div class = 'itemCounter' >
            //     <Button onClick={this.handlerCounterDown} className= 'counterButton' style={{padding:0}}variant="dark">-</Button>{' '}
            //     {/* mejorar esto porque esta horrendo */}
            //     <h5>{this.state.counter}</h5> 
            //     <Button onClick={this.handlerCounterUp} className= 'counterButton' style={{padding:0}} variant="dark">+</Button>{' '}
            // </div>
    };
    }
    
export default ItemCount;