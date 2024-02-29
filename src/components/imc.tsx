'use client'
import React, { useState } from "react";

export default function CalcularIMC() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('');

  function calcularIMC() {
    const alturaMetro = Number(altura) / 100
    const imcCalculado = Number(peso) / (alturaMetro * alturaMetro)
    
    setImc(imcCalculado.toFixed(2));
  }

  return (
    <div>
      <form>
        <label>
          Peso (kg):
          <input type="number" id="peso" onChange={(e) => setPeso(e.target.value)} value={peso} />
        </label>
        <label>
          Altura (cm):
          <input type="number" id="altura" onChange={(e) => setAltura(e.target.value)} value={altura} />
        </label>
        <button type="button" onClick={calcularIMC}>Calcular</button>
      </form>
      {imc && <h3>Seu IMC é: {imc}</h3>}
    </div>
  );
}

