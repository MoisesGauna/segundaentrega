

import './Presentacion.css';
import { Link } from 'react-router-dom';



const Presentacion = () => {
    return (
        <>
            <div className='banner-container'>
                <h1>GAMING STORE</h1>
                <p>Bienvenido a la mejor Tienda Gaming de la historia</p>
                <Link to= "/ItemlistContainer" >
        <button>Shop</button>
      </Link>
            </div>
        </>
    );
}

export default Presentacion;