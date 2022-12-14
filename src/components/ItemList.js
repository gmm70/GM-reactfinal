import style from '../style/style.css'
import { memo } from 'react'
import Item from './Item'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default memo(ItemList)