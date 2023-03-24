import { Link } from 'react-router-dom';

const Home = () => {

  

    return(
        <div>
            <h2>Home-Menu</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/categorias'>Categorias</Link></li>
                {/* <li><Link to='/eventos'>Eventos</Link></li>
                <li><Link to='/categorias'>Categorias</Link></li> */}

            </ul>
        </div>
    );

}

export default Home;