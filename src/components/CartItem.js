import React, { useContext, useState} from 'react';

import './CartItem.css'
import item1 from '../img/itemImages/bulbasaur.png'

import { Button} from 'react-bootstrap';

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'


const CartItem = ({data}) => {

    const [items, setItems,addItem, removeItem, clearCart, isInCart, getTotalItemQuantity, getTotalAmmount] = useContext(ItemsContext);//Funcion para mandar items al cart

    return <div class='cartItem itemStyle'>
        <div class='cartItemQuantityArea'><h3>{`X${data.quantity}`}</h3></div>
        <img src={data.item.img} class='cartItemImgArea' alt="Estamos Construyendo"/>
        <div class='cartItemDescriptionArea'><h3>{data.item.name}</h3></div>
        <div class='cartItemPriceArea'><h3>{`\$${data.item.price*data.quantity}`}</h3></div>
        <div class='cartItemButtonArea'>
            <Button onClick={() => removeItem(data.item.id)} variant="danger">X</Button>
        </div>
    </div>
};
export default CartItem;