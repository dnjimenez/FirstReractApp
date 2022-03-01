//TODO: SACAR TODA LA LOGICA DEL CARTVIEW

import React, { useContext, useState} from 'react';
import { Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'
import CartMessageSuccess from '../components/CartMessageSuccess'

//firebase
import { collection, query, where, getDocs, DocumentSnapshot,addDoc } from "firebase/firestore"; //firestore connection
import { db } from '../firebase/firebaseConfig'//firebase db

const initialState = {
	name: '',
	lastName: '',
    telephoneNumber: null,
	email: '',
};


const CartView = () => {

    const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
    const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// console.log(values);
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

    const [items, setItems,addItem, removeItem, clearCart, isInCart, getTotalItemQuantity, getTotalAmmount] = useContext(ItemsContext);//Funcion para mandar items al cart
    //TODO: Revisar esto, deja de funcionar si se cambia el orden de las constantes
    // console.log("cart quantity:", items.items.length)
return <div text-align='center'>
    <h1>Bienvenido al Cart</h1>
    {items.items.length > 0 ? ( 
        <div class='cartItemContainer'>
            {items.items.map((itemData) => {
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

            <form onSubmit={onSubmit}>
                <label>
                    Nombre:
                    <input onChange={handleOnChange} value={values.name} type="text" name="name" />
                </label>
                <label>
                    Apellido:
                    <input onChange={handleOnChange} value={values.surname} type="text" name="surname" />
                </label>
                <label>
                    Numero de Telefono:
                    <input onChange={handleOnChange} value={values.telephoneNumber} type="number" name="tel"/>
                </label>
                <label>
                    Email:
                    <input onChange={handleOnChange} value={values.email} type="email" name="email" />
                </label>
                {items.cantidadTotal>1 &&
                    <Button variant="dark" type="submit">Terminar Compra</Button>
                }
            </form>
            {purchaseID && <CartMessageSuccess purchaseID={purchaseID} />}
        </div>
        ) : (
        <div> <p> No tenés nada en el carrito </p> </div>
        )}
</div> 
};
export default CartView;