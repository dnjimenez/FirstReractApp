import React from 'react';
import { Card, Button} from 'react-bootstrap';
import './Item.css'

const Item = ({data}) => {
    return <Card className='itemCard text-center' /*bg='dark'*/ style={{ margin:'10px',width: '300px' }}>
        <Card.Img variant="top" src={data.img}/>
        <Card.Body>
            <Card.Title className='cardText'>{data.name}</Card.Title>
            <Card.Text className='cardText'>
                {`\$${data.price}`}
            </Card.Text>
        {/* <Button variant="dark">Comprar</Button> */}
    </Card.Body>
    </Card>
};
export default Item;