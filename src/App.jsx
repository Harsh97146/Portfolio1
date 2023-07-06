import './App.css';
import About from './components/about/About';
import Aside from './components/aside/Aside';
import Intro from './components/intro/Intro';
import Hader from './components/navBar/NavBar';
import Some from './components/some/Some';
import Where from './components/where/Where';



function App() {

  return (
    <div className="app">
     <Hader /><br />
     <Aside />
     <Intro /><br />
     <About />
     <Where />
     <Some />
     </div>
  )
}

export default App
