
import './App.css';
import LandingPage from "./pages/LandingPage";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
