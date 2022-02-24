import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

//context
import { ItemsContext } from '../providers/ItemProvider'

const CartWidget = () => {
    const [items, setItems,addItem, removeItem, clearCart, isInCart, getTotalItemQuantity, getTotalAmmount, totalQuantity, setTotalQuantity] = useContext(ItemsContext);//Context para chequeo de cart
    // console.log("cantidad items:",items.length)
    return <Button variant="outline-secondary" key={totalQuantity}><BsFillCartFill/>{totalQuantity}</Button>
};
export default CartWidget;