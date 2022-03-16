import React from 'react';
import { Card, Button} from 'react-bootstrap';

import './CartMessageSuccess.css'

const CartMessageSuccess = ({ purchaseID }) => {
	return (
		<h3 class='itemStyle'>Gracias por comprarnos pokemones! su id de transacción es: {purchaseID}</h3>
	);
};

export default CartMessageSuccess;
