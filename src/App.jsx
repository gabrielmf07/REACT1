import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/estilos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Machinery from './pages/Machinery';
import Person from './pages/Person';
import User from './pages/User';
import Alert from './pages/Alert';
import Home from './pages/Home';
import Index from './pages/Index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/admin" element={<Home/>}/>
        <Route path='/admin/machinery' element={<Machinery/>}/>
        <Route path='/admin/person' element={<Person/>}/>
        <Route path='/admin/user' element={<User/>}/>
        <Route path='/admin/alert' element={<Alert/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
