import Layout from './components/Pagina';
import Formulario from './components/Formulario';
import Table from './components/Tabela';

function App () {

  return(
    <div className="container">
      <Layout />
      <Formulario />
      <Table />
    </div>
  )
}

export default App