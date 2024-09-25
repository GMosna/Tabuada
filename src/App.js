import React, { useState } from "react";

function Tabuada() {
  const [numero, setNumero] = useState(""); 

  const gerarTabuada = () => {
    const num = (numero);
    return Array.from({ length: 10 }, (_, i) => `${num} x ${i + 1} = ${num * (i + 1)}`);
  };

  return (
    <div>
      <h1>Gerador de Tabuada</h1>
      <label htmlFor="numero">Digite o número da tabuada: </label>
      <input
        id="numero"
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <ul>
        {gerarTabuada().map((linha, index) => (
          <li key={index}>{linha}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tabuada;
