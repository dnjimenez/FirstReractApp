import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// STATE que le pasamos al useState
const initialState = [
];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	// const foo = () => {
	// 	alert(`Cantidad de items en nuestro carrito: ${items.length}`);
	// };

    const addItem = (item,quantity) => {
        //TODO: Mejorar Performance
        if(quantity>0){
            let newItemList = items
            // console.log(item.id)
            if (!isInCart(item.id)){
                newItemList.push({item:item, quantity:quantity})
            }
            else{
                for (let i = 0; i < newItemList.length; i++) {
                    if (newItemList[i].item.id == item.id) {
                        newItemList[i].quantity+=quantity
                    }
                }
            }
            setItems(newItemList)
            console.log(`Carrito actual`)
            console.log(items)
        }
	};

    const removeItem = (itemId) => {
        let newItemList = items
        for (let i = 0; i < newItemList.length; i++) {
            if (newItemList[i].item.id == itemId) {
                newItemList.splice(i, 1);
            }
        }
        setItems(newItemList)
        console.log(`Carrito actual`)
        console.log(items)
		//funcion 
	};

    const clearCart = () => {
		setItems([])
	};

    const isInCart = (itemId) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].item.id == itemId) {
                // console.log(true);
                return true
            }
        }
        // console.log(false);
        return false

		//funcion
	};

    
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (
		<ItemsContext.Provider value={[items, setItems,addItem, removeItem, clearCart, isInCart]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</ItemsContext.Provider>
	);
};
