import { Cabecalho } from './componentes/Cabecalho';
import { Navbar } from './componentes/Navbar';
import { Conteudo } from './componentes/Conteudo';
import { Rodape } from './componentes/Rodape';

// Estrutura básica para utilizar React -> Funções
function App() {
// trazer o resultado da função, deve-se utilizar o return com apenas 1 componente
  return (
    // Chamar o CSS ->dar apelido a tag e chamar ela usando className
    // Tags fantasmas severm para habilitar a utilização de duas ou mais tags  dentro da função
    
    <>
      <Cabecalho/>
      <Navbar/>
      <Conteudo/>
      <Rodape/>
    </>

  )
}

export default App
