//TODO: SACAR TODA LA LOGICA DEL CARTVIEW

import React, { useContext} from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'


const CartView = () => {

    const [items, setItems,addItem, removeItem, clearCart, isInCart, getTotalItemQuantity, getTotalAmmount] = useContext(ItemsContext);//Funcion para mandar items al cart
    //TODO: Revisar esto, deja de funcionar si se cambia el orden de las constantes
    console.log(getTotalItemQuantity())
return <div text-align='center'>
    <h1>Bienvenido al Cart</h1>
    {items.length > 0 ? ( 
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
            <Button onClick={() => clearCart()} variant="dark">Vaciar Carrito</Button>
            <h2>Monto Total: {getTotalAmmount()}</h2>
            <Link to="/Shop">
                <Button variant="dark">Volver a la Tienda</Button>
            </Link>
            {getTotalItemQuantity()>1 &&
            <Button variant="dark">Terminar Compra</Button>
            }
        </div>
        ) : (
        <div> <p> No tenés nada en el carrito </p> </div>
        )}
</div> 
};
export default CartView;