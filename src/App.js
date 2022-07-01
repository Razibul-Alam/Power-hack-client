import 'bootstrap/dist/css/bootstrap.min.css';
import AddBilling from './Components/Billing/AddBilling';
import Billing from './Components/Layout/Billing';
import Header from './Components/Layout/Header';
function App() {
  return (
    <div className="App">
     <Header/>
     <Billing/>
    </div>
  );
}

export default App;
