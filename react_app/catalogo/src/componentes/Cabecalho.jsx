import estilos from './cabecalho.module.css';
// Estrutura básica para um componente

export function Cabecalho(){
    return(
        <header className={estilos.cabecalho}>
            <h1>Bruflix</h1>
        </header>
    );
}