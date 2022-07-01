import 'bootstrap/dist/css/bootstrap.min.css';
import Billing from './Components/Layout/Billing';
import Header from './Components/Layout/Header';
import Login from './Components/Authentication/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Header/>
     <Router>
      <Routes>
     <Route path='/' element={<Billing/>}/>
     <Route path='/login' element={<Login/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
