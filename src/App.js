import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Portfolio/>
    </div>
  );
}

export default App;
