import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Dados  from "pages/Dados";
import Cadastro from "components/Cadastro";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dados />}/>
        <Route path="/cadastro">
          <Route path=":cadastroId" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
