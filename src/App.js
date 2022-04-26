
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header'
import AddProduct from './components/functionComponent';
import Details from './components/Details';
function App() {


  return (
    <div className="App">

        <h1> ABC STORES</h1>
      <AddProduct />

      <Header />



    </div>
  );
  }

export default App;







