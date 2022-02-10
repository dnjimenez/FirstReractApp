import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router'

const ItemDetailView = () => {
    //test añadidos
    let currentItem= useParams();
    // console.log(currentItem)
    //test añadidos

    return <ItemDetailContainer itemId={currentItem}/>
};
export default ItemDetailView;