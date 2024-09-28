import React, { useState } from "react";


function App() {
  const [numero, setNumero] = useState("");
  const [tabuada, setTabuada] = useState("");
  const [respostas, setRespostas] = useState([]);
  const [resultados, setResultados] = useState([]);

  const gerarTabuada = () => {
    const novaTabuada = Array.from({ length: 10 }, (_,i) => ({
      pergunta: `${numero} x ${i + 1}`,
      resultado: (i + 1) * numero
    
  }));
    setTabuada(novaTabuada);
    setRespostas(Array(10).fill("")); 
    setResultados(Array(10).fill("")); 
  };

  const validarRespostas = () => {
    const novosResultados = tabuada.map((item, i) => 
      item.resultado === parseInt(respostas[i]) ? "Correto" : "Errado"
    );
    setResultados(novosResultados);
  };

  const handleChangeResposta = (index, value) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  return (
    <div className="App">
      <h1>Gerador de Tabuada</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={gerarTabuada}>Gerar Tabuada</button>

      {tabuada.length > 0 && (
        <>
          <ul>
            {tabuada.map((item, i) => (
              <li key={i}>
                {item.pergunta} = 
                <input
                  type="number"
                  value={respostas[i]}
                  onChange={(e) => handleChangeResposta(i, e.target.value)}
                />
                {resultados[i] && <span> {resultados[i]}</span>}
              </li>
            ))}
          </ul>
          <button onClick={validarRespostas}>Validar Respostas</button>
        </>
      )}
    </div>
  );
}

export default App;

