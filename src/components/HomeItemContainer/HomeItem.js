import React from 'react';
import { Card, Button} from 'react-bootstrap';
import item1 from '../../img/itemImages/bulbasaur.png'
import './HomeItem.css'

const HomeItem = ({data}) => {
    return <Card className='itemCard text-center' /*bg='dark'*/ style={{ margin:'0px',width: '300px'}}>
        <Card.Img variant="top" src={item1}/>
        <Card.Body>
            <Card.Title className='cardText'>test title</Card.Title>
            <Card.Text className='cardText'>
                Test Price
            </Card.Text>
        {/* <Button variant="dark">Comprar</Button> */}
    </Card.Body>
    </Card>
};
export default HomeItem;