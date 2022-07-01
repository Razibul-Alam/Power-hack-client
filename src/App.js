import 'bootstrap/dist/css/bootstrap.min.css';
import Billing from './Components/Layout/Billing';
import Header from './Components/Layout/Header';
import Login from './Components/Authentication/Login';
function App() {
  return (
    <div className="App">
     <Header/>
     <Billing/>
    </div>
  );
}

export default App;
