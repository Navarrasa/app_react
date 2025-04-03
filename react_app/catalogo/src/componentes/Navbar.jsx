import estilo_navbar from './navbar.module.css';
export function Navbar(){
    return(
        <nav className={estilo_navbar.conteiner}>
            <ul>
                <li>Home</li>
                <li>Home A</li>
                <li>Home B</li>
            </ul>
        </nav>
    );
}