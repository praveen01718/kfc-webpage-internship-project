import './App.css';
import Nvabar from './component/Nvabar';
import Footer from './component/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';    
import MenuPage from './Pages/MenuPage';
import Deals from './Pages/Deals';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Admin from './Admin/Admin'
import Upload from './Admin/Upload';
import Edit from './Admin/Edit';
function App() {
  return (
   <>
   <BrowserRouter>
   <Nvabar></Nvabar>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/menu' element={<MenuPage/>}/>
    <Route path='/deals' element={<Deals/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/Edit' element={<Edit/>}/>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
   </>
  );
}

export default App;
