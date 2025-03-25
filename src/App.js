// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Pagenotfound from './components/Pagenotfound';
import Makepayment from './components/Makepayment';
import Navbarcomp from './components/Navbarcomp';
import { useEffect, useState } from 'react';
import Aboutus from './components/Aboutus';
import Carouselcomponent from './components/Carouselcomponent';
import Footercomp from './components/Footercomp';

function App() {
  const [user, setUser] = useState("");

    useEffect(() => {
        // Load user from localStorage when the app initializes
        const savedUser = JSON.parse(localStorage.getItem("user"));
        setUser(savedUser);
    }, []);

  return (
    <Router>

      <div className="App">
        <header className="">
        <Navbarcomp user={user} setUser={setUser} />
        </header>
      </div>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin setUser={setUser}/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        {/* Default component */}
        <Route path='/' element={<Getproducts/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <div>
        <Footercomp/>
      </div>
    </Router>
  );
}

export default App;
