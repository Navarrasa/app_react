import estilo_navbar from './navbar.module.css';
export function Navbar(){
    return(
        <nav className={estilo_navbar.conteiner}>
            <ul>
                <li>Filmes</li>
                <li>Séries</li>
                <li>Desenhos</li>
            </ul>
        </nav>
    );
}