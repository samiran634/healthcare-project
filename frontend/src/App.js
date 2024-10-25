import './App.css';
import NavbarContainer from './components/navbar/container';
import Home from './components/display/pages/home';
import About from './components/display/pages/about';
import Pricing from './components/display/pages/pricing';
import Signin from './components/display/pages/signin';
import Signup from './components/display/pages/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const props = {
  title: "Doc-Finder",
  home: "Home",
  about: "About",
  pricing: "Pricing",
  signin: "Sign In",
  signup: "Sign Up"
}
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer {...props}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
