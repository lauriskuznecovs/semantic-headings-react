import './App.css';
import Heading from './Heading'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading.Boundary>
          <Heading.H>Heading 1</Heading.H>
          <p>Example of semantic headings</p>
          <Heading.Boundary>
            <Heading.H>Heading 2</Heading.H>
          </Heading.Boundary>
          <Heading.Boundary>
           <Heading.H>Heading 2</Heading.H>
           <Heading.Boundary>
             <Heading.H>Heading 3</Heading.H>
           </Heading.Boundary>
          </Heading.Boundary>
        </Heading.Boundary>
      </header>
    </div>
  );
}

export default App;
