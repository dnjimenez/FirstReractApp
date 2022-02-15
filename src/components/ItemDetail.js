import React from 'react';
import './ItemDetail.css';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

class ItemDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemQuantity: null
        }
    }

    handleCallback = (counterData) =>{
        this.setState({itemQuantity: counterData})
    }

    render(){
        return(
            <div class="itemDetailCard">
                <div class="ImageArea">
                    <img id='itemImage'src={this.props.data.img}></img>
                </div>
                <div class="infoCard">
                    <Card style={{ width: '25rem', height: "500px"}} id="infoCardDetail">
                        <Card.Title class = 'itemTitleArea cardCenterItem'><h4>{this.props.data.name}</h4></Card.Title>
                        <Card.Text class= 'itemDescriptionArea'>
                        {this.props.data.largeDescription}
                        </Card.Text>
                        <Card.Text class='itemStockArea'>
                        <h5>Stock: {this.props.data.stock}</h5>
                        <h5>Precio: {this.props.data.precio}</h5>
                        </Card.Text>
                        <div class='counterArea cardCenterItem'>
                            <ItemCount stock={this.props.data.stock} parentCallback = {this.handleCallback}/>
                        </div>
                        <div class='buttonArea cardCenterItem'>
                            <Link to="/Cart">
                                <Button variant="dark">Comprar</Button>
                            </Link>
                            
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

// const ItemDetail = ({data}) => {
    
//     return <div class="itemDetailCard">
//         <div class="ImageArea">
//             <img id='itemImage'src={data.img}></img>
//         </div>
//         <div class="infoCard">
//             <Card style={{ width: '25rem', height: "500px"}} id="infoCardDetail">
//                 <Card.Title class = 'itemTitleArea cardCenterItem'><h4>{data.name}</h4></Card.Title>
//                 <Card.Text class= 'itemDescriptionArea'>
//                 {data.largeDescription}
//                 </Card.Text>
//                 <Card.Text class='itemStockArea'>
//                 <h5>Stock: {data.stock}</h5>
//                 <h5>Precio: {data.precio}</h5>
//                 </Card.Text>
//                 <div class='counterArea cardCenterItem'>
//                     <ItemCount stock={data.stock} parentCallback = {this.handleCallback}/>
//                 </div>
//                 <div class='buttonArea cardCenterItem'>
//                     <Button variant="dark">Comprar</Button>
//                 </div>
//             </Card>
//         </div>
//     </div>
// };
export default ItemDetail;