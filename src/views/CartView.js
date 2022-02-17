//TODO: SACAR TODA LA LOGICA DEL CARTVIEW

import React, { useContext} from 'react';
import { Button} from 'react-bootstrap';

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'


const CartView = () => {

    const [items, setItems, addItem,removeItem, clearCart, isInCart] = useContext(ItemsContext);//Funcion para mandar items al cart
    //TODO: Revisar esto, deja de funcionar si se cambia el orden de las constantes
    
return <div text-align='center'>
    <h1>Bienvenido al Cart</h1>
    <div class='cartItemContainer'>
			{items.map((itemData) => {
                // console.log(item)
				return (
                    <div>
                        <h3>item:{itemData.item.name}     cantidad:{itemData.quantity}</h3> 
                        <Button onClick={() => removeItem(itemData.item.id)} variant="dark">Remover Item</Button>
                    </div>
				);
			})} 
	</div>
    <Button onClick={() => clearCart()} variant="dark">Vaciar Carrito</Button>
</div> 
};
export default CartView;