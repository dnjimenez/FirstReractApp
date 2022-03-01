import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// STATE que le pasamos al useState
const initialState = {
    items:[],
    cantidad:0,
    cantidadTotal:0
};

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);
    var [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item,quantity) => {
        //TODO: Mejorar Performance
        console.log("Cantidad de Items Inicial:",items.cantidadTotal)
        if(quantity>0){
            if (!isInCart(item.id)){
                console.log("Camino Elegido: if")
                setItems(
                    {
                        items:[...items.items, { item: item, quantity: quantity }],
                        cantidad:items.cantidad+=1,
                        cantidadTotal:items.cantidadTotal+=quantity
                    });
                setTotalQuantity(totalQuantity+=quantity)//test
            }
            else{
                console.log("Camino Elegido: else")
                for (let i = 0; i < items.items.length; i++) {
                    if (items.items[i].item.id == item.id) {
                        items.items[i].quantity += quantity;
                        items.cantidadTotal += quantity;
                    }
                }
                setItems(items)
                setTotalQuantity(totalQuantity+=quantity)//test
                console.log("cantidad items Final",items.cantidadTotal)
            }
            // console.log(`Carrito actual`)
            // console.log(items)
        }
	};

    const removeItem = (itemId) => {
        let quantityToSubstract = items.items.filter((item) => item.item.id == itemId)[0].quantity//saco la cantidad del item antes de sacarlo
        let newTotalQuantity = items.cantidadTotal-quantityToSubstract // saco la cantidad total nueva restando la cantidad de los items que voy a eliminar

        setItems(
            {
                items:[...items.items.filter((item) => item.item.id !== itemId)],//Saco el item que corresponde al id
                cantidad:items.cantidad-=1,
                cantidadTotal:items.cantidadTotal=newTotalQuantity
            });

        setTotalQuantity(newTotalQuantity)//test
        console.log(`Carrito actual`)
        console.log(items)
		//funcion 
	};

    const clearCart = () => {
		setItems(initialState)
        setTotalQuantity(0)
	};

    const isInCart = (itemId) => {
        for (let i = 0; i < items.items.length; i++) {
            if (items.items[i].item.id == itemId) {
                // console.log(true);
                return true
            }
        }
        // console.log(false);
        return false

		//funcion
	};

    const getTotalItemQuantity= () => {
        let quantity =0
		for (let i = 0; i < items.length; i++) {
            quantity+=items[i].quantity
        }
        return quantity
	};

    const getTotalAmmount= () => {
        let amount =0
		for (let i = 0; i < items.items.length; i++) {
            // console.log("quantity:", items.items[i].item)
            amount+=(items.items[i].quantity*items.items[i].item.price)
        }
        return amount
	};
    
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (
		<ItemsContext.Provider value={[items, setItems,addItem, removeItem, clearCart, isInCart, getTotalItemQuantity, getTotalAmmount, totalQuantity, setTotalQuantity]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</ItemsContext.Provider>
	);
};
