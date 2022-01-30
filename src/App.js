import './style.css';
import Routespage from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// https://sujeitoprogramador.com/r-api/?api=filmes

export default function App() {
  return (
    <div className="app">
      <Routespage/>
      <ToastContainer autoclose={3000}/>
    </div>
  );
}
