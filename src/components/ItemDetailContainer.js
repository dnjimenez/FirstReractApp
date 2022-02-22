import {React, useState, useEffect} from 'react';
// import './ItemListContainer.css';
import ItemDetail from "./ItemDetail"
import { listItems } from '../constants/ItemConstants';


const ItemDetailContainer = ({itemId}) => {

    // console.log(itemId)

    function getItem(){
        for (let i = 0; i < listItems.length; i++) {
            // console.log(listItems[i])
            if (listItems[i].id==itemId.id){
                // console.log(true)
                return listItems[i]
            }
        }
    }

    const promesa = new Promise((resolve) => {
        //code side
        setTimeout(() => {
            resolve(getItem())
        }, 2000)
    })
    

    const [stateItem, setStateItem] = useState({})
    

    useEffect(() => {
        promesa.then((response) => {
            // console.log(response)
            setStateItem(response)
        })
    }, [])

    

    return (<ItemDetail data={stateItem}/>
	);
    
};
export default ItemDetailContainer;