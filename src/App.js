import Typer from './components/Typer';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <div className="App">
      <header className="header">
        <Typer/>
      </header>
      <Project/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
