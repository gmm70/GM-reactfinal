import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import { CartContextProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from './notification/Notification';

function App() {
 
  return (
    <div className="App"> 
          <NotificationProvider>
            <CartContextProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting='Listado de los productos'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado, '/>} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                  <Route path='*' element={<h1>ALGO SALIÓ MAL</h1>} /> 
                </Routes>
              </BrowserRouter>
            </CartContextProvider>
          </NotificationProvider>
    </div>
  );
}

export default App;