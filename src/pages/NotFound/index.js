import './notfound.css';
import {Link} from 'react-router-dom';

export default function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não Encontrada!</h2>
            <Link to='/'>Voltar á página Inicial</Link>
        </div>
    )
}