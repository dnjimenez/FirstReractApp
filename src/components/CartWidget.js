import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

//context
import { ItemsContext } from '../providers/ItemProvider'

const CartWidget = () => {
    const [items, setItems, addItem,removeItem, clearCart, isInCart, getTotalItemQuantity] = useContext(ItemsContext);//Context para chequeo de cart
    return <Button variant="outline-secondary"><BsFillCartFill/>{items.length}</Button>
};
export default CartWidget;