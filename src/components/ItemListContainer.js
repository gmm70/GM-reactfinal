import style from '../style/style.css'
import { useState, useEffect, useContext } from 'react'
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/index'
import { NotificationContext } from '../notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            
        }, 1000)
    }, [])

    if(loading && true) {
        return <h1>Cargando productos, espere un segundo</h1>
    }


    return (

        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            { products.length > 0 && <ItemList products={products} /> }
        </div>
    )
}

export default ItemListContainer