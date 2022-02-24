import {React, useState, useEffect} from 'react';
// import './ItemListContainer.css';
import ItemDetail from "./ItemDetail"

//Firebase
import { collection, query, where, getDocs, DocumentSnapshot, documentId } from "firebase/firestore"; //firestore connection
import { db } from '../firebase/firebaseConfig'//firebase db



const ItemDetailContainer = ({itemId}) => {


    function getItem(items){
        for (let i = 0; i < items.length; i++) {
            // console.log(listItems[i])
            if (items[i].id==itemId.id){
                // console.log(true)
                return items[i]
            }
        }
    }

    const [stateItem, setStateItem] = useState({})
    

    useEffect(() => {
        const getItems = async() => {
            const q = query(collection(db, "items"), where(documentId(), "==", itemId.id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            // console.log("QueryData: ",querySnapshot)
            querySnapshot.forEach((doc) =>{
                // console.log("data:",doc.data(),"ID:", doc.id)
                docs.push({...doc.data(),id:doc.id})
            })
            // console.log(docs)
            setStateItem(docs[0])
        };
        getItems()
    }, [])

    

    return (<ItemDetail data={stateItem}/>
	);
    
};
export default ItemDetailContainer;