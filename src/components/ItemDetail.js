import React from 'react';
import './ItemDetail.css';
import { Card, Button} from 'react-bootstrap';
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
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
                <Card.Text class='itemStockArea cardCenterItem'>
                <h5>Stock: {data.stock}</h5>
                <h5>Precio: {data.precio}</h5>
                </Card.Text>
                {/* <div class='counterArea'>
                    <ItemCount />
                </div> */}
                <div class='buttonArea cardCenterItem'>
                    <Button variant="dark">Comprar</Button>
                </div>
            </Card>
        </div>
    </div>
};
export default ItemDetail;