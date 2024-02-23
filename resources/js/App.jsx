import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

//TODO:aqui incluir import css con hoja de estilos propios

const App = () => {
  return (
    <div>
      Main principal COFFEETAKEAWAY
      <button className='btn btn-primary'> LISTO! </button>
    </div>
  )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}