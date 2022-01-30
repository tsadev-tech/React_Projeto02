import { useEffect , useState } from 'react';
import './filme-info.css';
import { useParams, useNavigate  } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme(){
    const navigate  = useNavigate ();
    const { id } = useParams();   
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState([]);
    
    useEffect(() => {
        async function loadFilmes(){
        const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0) {
                navigate.replace('/');
                return;
            }

        setFilme(response.data);
        setLoading(false);
       }
       
       loadFilmes();

    return () => {
        console.log('COMPONENTE DESMONTAR')
        }
    
        }, [navigate ,id]);

     function salvaFilmes() {
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesalvo) => filmesalvo.id === filme.id );

        if (hasFilme) {
            toast.error('Você já favoritou este filme!');
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme adicionado aos favoritos com sucesso!')
     }   

    if(loading){
        return(
            <div className="filme-info">
            <h1>Carregando filme ...</h1>
            </div> 
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto}  alt={filme.nome}  />
            <h3>Sinopse</h3>
            {filme.sinopse}
            <div className="botoes">
                <button onClick={() =>{salvaFilmes()}}>Salvar</button>
                <button>
                 <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>   
                    Trailer
                </a>    
                </button> 
            </div>
        </div>
    )
}