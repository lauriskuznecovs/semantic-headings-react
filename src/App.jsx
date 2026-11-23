import './App.css';
import Heading from './Heading'
import Text from './Text'
import Hero from './Hero'

const elements = [
  {
    type: 'Text',
    text: 'Heading 1',
  },
  {
    type: 'Text',
    text: 'Heading 2',
  },
  {
    type: 'Hero',
    text: 'Heading 2',
  },
]

const components = {
  Text,
  Hero,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {elements.map((element, key) => {
          const Component = components[element.type]
          return (
            <Heading.Boundary key={key} levelOverride={key === 0 ? 1 : 2}>
              <Component value={element.text} />
            </Heading.Boundary>
          )
        })}
        {/* <Heading.Boundary> */}
          {/* <Heading.H>Heading 1</Heading.H>
          <p>Example of semantic headings</p>
          <Heading.Boundary>
            <Heading.H>Heading 2</Heading.H>
          </Heading.Boundary>
          <Heading.Boundary>
           <Heading.H>Heading 2</Heading.H>
           <Heading.Boundary>
             <Heading.H>Heading 3</Heading.H>
           </Heading.Boundary>
          </Heading.Boundary> */}
        {/* </Heading.Boundary> */}
      </header>
    </div>
  );
}

export default App;
