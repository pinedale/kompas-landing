import kompasLogo from './assets/kompas.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='logo-container'>
        <a href="https://koompas.global" target="_blank">
          <img src={kompasLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Algo nuevo viene en camino</h1>
      
      <p className="read-the-docs">
        Pronto podrás explorar Kompas
      </p>
      <div className="footer">
        <p>Copyright © 2025 Kompas Lab, S.A.P.I. de C.V.</p>
      </div>
    </>
  )
}

export default App
