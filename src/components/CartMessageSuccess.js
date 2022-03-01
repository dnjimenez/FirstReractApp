import React from 'react';
import { Card, Button} from 'react-bootstrap';

const CartMessageSuccess = ({ purchaseID }) => {
	return (
		<h3>Gracias por comprarnos pokemones! su id de transacción es: {purchaseID}</h3>
	);
};

export default CartMessageSuccess;
