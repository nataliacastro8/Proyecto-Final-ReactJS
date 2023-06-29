import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';


function App() {
  return (
    <div className='container-fluid'>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element = {<ItemListContainer />} />
            <Route path={"/category/:id"} element = {<ItemListContainer />} />
            <Route path={"/item/:id"} element = {<ItemDetailContainer />} />
            <Route path={"/cart"} element = {<Cart/>} />
            <Route path={"/*"} element = {<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
