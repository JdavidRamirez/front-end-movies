
import './App.css';
import  NavBar  from './Components/NavBar';
import Table from './Components/Table'

function App() {

  const titulo = "Peliculas IUdigital"

  return (
    <div className="container">

      <NavBar titulo={titulo}/>
      <Table />
       
  
    </div>
  );
}

export default App;
