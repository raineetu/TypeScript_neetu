import './App.css'
import Person from './components/Person';

function App() {
  const name: string = "Neetu";

  return (
    <>
      <h1>{name}</h1>
      <Person />
    </>
  );
}

export default App;
