import React, { useState } from 'react'
import PalavraChave from './PalavraChave';
import './App.css'

function App() {
  const [palavra, setPalavra] = useState();

  const handleChange = (event) => {
    setPalavra(event.target.value);
  };
  return (
    <div className="App">
<input type = "text" value={palavra} onChange={handleChange} />
<PalavraChave palavra = {palavra} />

    </div>
  )
}

export default App;
