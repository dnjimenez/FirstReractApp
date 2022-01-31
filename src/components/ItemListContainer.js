import React from 'react';
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return <div>
        {props.message}
        <ItemCount/>
    </div>
};
export default ItemListContainer;