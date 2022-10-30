import style from '../style/style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
// import { Context} from '../../App'


const Item = ({id, name, img, price}) => {
    return (
        <article className="CardI">
            <header className="Header">
                <h2 className="ItemName">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="CardInfo">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item