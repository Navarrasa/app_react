import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <Link classname={estilos.text_lines} to='/'>
                    <li>
                         <span class="material-symbols-outlined">home</span>
                         Home
                     </li>
                 </Link>
                 <Link classname={estilos.text_lines} to='series'>
                     <li>
                         <span class="material-symbols-outlined">movie</span>
                         Séries
                     </li>
                 </Link>
                 <Link classname={estilos.text_lines} to='perfil'>
                     <li>
                         <span class="material-symbols-outlined">person</span>
                         Perfil
                     </li>
                 </Link>
             </ul>
         </nav>
    );
}