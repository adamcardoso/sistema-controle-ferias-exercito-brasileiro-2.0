import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Dados  from "pages/Dados";
import Cadastro from "components/Cadastro";
import Administrador from "components/Administrador";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dados />}/>
        
      </Routes>

      <Routes>
        <Route path="/cadastro">
          <Route path=":cadastroId" element={<Cadastro />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Administrador />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
