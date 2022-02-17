import React, { useContext, useEffect, useState } from 'react';
import './ItemDetail.css';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'

const ItemDetail = ({data}) => {

    const [items, setItems, addItem] = useContext(ItemsContext);//Funcion para mandar items al cart
    //TODO: Revisar esto, deja de funcionar si se cambia el orden de las constantes

    const [itemQuantity, setitemQuantity] = useState(null);

    var handleCallback = (counterData) => {
        // console.log(itemQuantity)
        setitemQuantity (counterData)
    }
    
    return <div class="itemDetailCard">
        <div class="ImageArea">
            <img id='itemImage'src={data.img}></img>
        </div>
        <div class="infoCard">
            <Card style={{ width: '25rem', height: "500px"}} id="infoCardDetail">
                <Card.Title class = 'itemTitleArea cardCenterItem'><h4>{data.name}</h4></Card.Title>
                <Card.Text class= 'itemDescriptionArea'>
                {data.largeDescription}
                </Card.Text>
                <Card.Text class='itemStockArea'>
                <h5>Stock: {data.stock}</h5>
                <h5>Precio: {data.precio}</h5>
                </Card.Text>
                <div class='counterArea cardCenterItem'>
                    <ItemCount stock={data.stock} parentCallback = {handleCallback}/>
                </div>
                <div class='buttonArea cardCenterItem'>
                    <Button onClick={() => addItem(data,itemQuantity)} variant="dark">Agregar al Carrito</Button>
                </div>
            </Card>
        </div>
</div>
};

export default ItemDetail;


// class ItemDetail extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             itemQuantity: null
//         }
//     }

//     handleCallback = (counterData) =>{
//         this.setState({itemQuantity: counterData})
//     }

//     render(){
//         return(
//             <div class="itemDetailCard">
//                 <div class="ImageArea">
//                     <img id='itemImage'src={this.props.data.img}></img>
//                 </div>
//                 <div class="infoCard">
//                     <Card style={{ width: '25rem', height: "500px"}} id="infoCardDetail">
//                         <Card.Title class = 'itemTitleArea cardCenterItem'><h4>{this.props.data.name}</h4></Card.Title>
//                         <Card.Text class= 'itemDescriptionArea'>
//                         {this.props.data.largeDescription}
//                         </Card.Text>
//                         <Card.Text class='itemStockArea'>
//                         <h5>Stock: {this.props.data.stock}</h5>
//                         <h5>Precio: {this.props.data.precio}</h5>
//                         </Card.Text>
//                         <div class='counterArea cardCenterItem'>
//                             <ItemCount stock={this.props.data.stock} parentCallback = {this.handleCallback}/>
//                         </div>
//                         <div class='buttonArea cardCenterItem'>
//                             <Link to="/Cart">
//                                 <Button variant="dark">Agregar al Carrito</Button>
//                             </Link>
//                         </div>
//                     </Card>
//                 </div>
//             </div>
//         )
//     }
// }