import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Item from '../components/Item';
import '../components/ItemListContainer.css'

//Firebase
import { collection, query, where, getDocs, DocumentSnapshot } from "firebase/firestore"; //firestore connection
import { db } from '../firebase/firebaseConfig'//firebase db

const TazasView = () => {
    
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async() => {
            const q = query(collection(db, "items"), where("type", "==", "mug"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            // console.log("QueryData: ",querySnapshot)
            querySnapshot.forEach((doc) =>{
                // console.log("data:",doc.data(),"ID:", doc.id)
                docs.push({...doc.data(),id:doc.id})
            })
            // console.log(docs)

            setItems(docs)//ordenamiento por numero de pokedex
        };
        getItems()
    }, [])

    return (
		<div class='itemListContainer'>
			{items.map((item) => {
                // console.log(item)
				return (
                    <Link className='centeredSubItemList noDecorationLink'to={`/detail/${item.id}`}>
						<Item data={item} key={item.id}/>
                    </Link>
					
				);
			})} 
		</div>
	);
    
};
export default TazasView;