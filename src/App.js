import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/Checkout' element={<Checkout />}>
          </Route>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
