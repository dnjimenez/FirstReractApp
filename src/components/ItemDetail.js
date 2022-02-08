import React from 'react';
import './ItemDetail.css';
import { Card, Button} from 'react-bootstrap';

const ItemDetail = ({data}) => {
    return <div class="itemDetailCard">
        <div class="ImageArea">
            <img id='itemImage'src={data.img}></img>
        </div>
        <div class="infoCard">
            <Card style={{ width: '35rem', height: "500px"}} id="infoCardDetail">
                <Card.Title class = 'itemTitleArea'><h4>{data.name}</h4></Card.Title>
                <Card.Text class= 'itemDescriptionArea'>
                {data.largeDescription}
                </Card.Text>
                <Card.Text class='itemStockArea'>
                <h5>Stock: {data.stock}</h5>
                </Card.Text>
                <div class='buttonArea'>
                    <Button variant="dark">Comprar</Button>
                </div>
            </Card>
        </div>
    </div>
    // <Card style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src={data.img}/>
    //     <Card.Body>
    //         <Card.Title>{data.name}</Card.Title>
    //         <Card.Text>
    //             {data.description}
    //         </Card.Text>
    //     <Button variant="dark">Comprar</Button>
    // </Card.Body>
    // </Card>
};
export default ItemDetail;