//TODO: SACAR TODA LA LOGICA DEL CARTVIEW

import React, { useContext, useState} from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './CartView.css'
import CartItem from '../components/CartItem';

//ContextImport
import { ItemsContext } from '../providers/ItemProvider'
import CartMessageSuccess from '../components/CartMessageSuccess'

//firebase
import { collection, query, where, getDocs, DocumentSnapshot,addDoc } from "firebase/firestore"; //firestore connection
import { db } from '../firebase/firebaseConfig'//firebase db

const initialState = {
	name: '',
	lastName: '',
    telephoneNumber: Number,
	email: '',
    items: [],
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
        values.items=items.items
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

return <div class='cartView'>
    <h1>Bienvenido al Cart</h1>
    {/* <CartItem className='centeredItem'/> */}
    {items.items.length > 0 ? ( 
        <div class='cartItemContainer'>
            {items.items.map((itemData) => {
                // console.log(item)
                return (
                    <CartItem className='m-10' data={itemData} key={itemData.item.id}/>
                );
            })} 
            <div class='cartBriefArea'>
                <Link to="/Shop" className='m-10'>
                    <Button variant="dark">Volver a la Tienda</Button>
                </Link>
                <h2 className='m-10'>Monto Total: {getTotalAmmount()}</h2>
                <Button className='m-10'onClick={() => clearCart()} variant="dark">Vaciar Carrito</Button>
            </div>

            <form class='cartForm' onSubmit={onSubmit}>
                <label class='formNameArea centerAligned'>
                    <h3>Nombre</h3>
                    <input class='itemStyle' onChange={handleOnChange} value={values.name} type="text" name="name" />
                </label>
                <label class='formSurnameArea centerAligned'>
                    <h3>Apellido</h3>
                    <input class='itemStyle' onChange={handleOnChange} value={values.lastName} type="text" name="lastName" />
                </label>
                <label class='formPhoneArea centerAligned'>
                    <h3>Numero de Telefono</h3>
                    <input class='itemStyle' onChange={handleOnChange} value={values.telephoneNumber} type="number" name="telephoneNumber"/>
                </label>
                <label class='formEmailArea centerAligned'>
                    <h3>Email</h3>
                    <input class='itemStyle' onChange={handleOnChange} value={values.email} type="email" name="email" />
                </label>
                {items.cantidadTotal>1 &&
                    <label class='formButtonArea centerAligned'>
                        <Button variant="dark" type="submit">Terminar Compra</Button>
                    </label>
                }
            </form>
            {purchaseID && <CartMessageSuccess purchaseID={purchaseID} />}
        </div>
        ) : (
        <h3 style={{ margin:'20px'}}> No tenés nada en el carrito </h3>
        )}
</div> 
};
export default CartView;