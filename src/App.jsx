import './App.css'
import ClassKomponenta from './ClassKomponenta'
import FunctionKomponenta from './FunctionKomponenta'

function App() {
  return (
    <>
      <ClassKomponenta title="Klasna komponenta"/>
      <FunctionKomponenta title="Funkcijska komponenta" ime="Matej" godine={40}/>
    </>
  )
}

export default App
