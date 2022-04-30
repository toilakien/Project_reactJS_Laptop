import { Routes,Route } from "react-router-dom";
import CuaHangPage from '../Page/CuaHangPage';
import HoSoCuaHangPage from "../Page/HoSoCuaHangPage";
import MuaHangPage from '../Page/MuaHangPage';
import ProductsPage from '../Page/ProductsPage';
import Login from '../components/Login/Login';
import Logup from '../components/Logup/Logup';
import CartPage from "../Page/CartPage";
   export let routes = (
        <Routes>
          <Route exact path="/" element={<CuaHangPage/>} />
          <Route path="/products" element={< ProductsPage/>}/>
          <Route path="/HoSoCuaHang" element={<HoSoCuaHangPage />}/>
          <Route path="/products/muahang" element={<MuaHangPage />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Logup" element={<Logup/>}/>
          <Route path="/products/muahang/cart" element={<CartPage/>}/>
        </Routes>
      );