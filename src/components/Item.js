import React from 'react';
import { Card, Button} from 'react-bootstrap';

const Item = ({data}) => {
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.img}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
                {data.description}
            </Card.Text>
        {/* <Button variant="dark">Comprar</Button> */}
    </Card.Body>
    </Card>
};
export default Item;