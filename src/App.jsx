import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import PaginationProvider from './contexts/PaginationContext'
import './App.css'

function App() {

  return <PaginationProvider>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exaxt path="/home" element={<Navigate to={"/"} ></Navigate>} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<ProductDetails />} />
      <Route exact path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </PaginationProvider>

}

export default App