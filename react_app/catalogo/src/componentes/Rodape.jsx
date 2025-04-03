import rodape_estilos from './rodape.module.css';

export function Rodape(){
    return(
        <footer className={rodape_estilos.rodape}>
            <p>devBruno</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    );
}