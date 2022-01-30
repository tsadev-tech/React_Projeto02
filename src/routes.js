import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favorito';
import NotFound from './pages/NotFound';

const Routespage = () => {
    return (
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/filme/:id' element={<Filme/>} />
        <Route exact path='/favoritos' element={<Favoritos/>} />
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }  
  export default Routespage;