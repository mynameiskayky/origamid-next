"use client";

import { AdicionarProduto } from "@/actions/add-produto";
import React, { FormEvent, useState } from "react";

export default function AdicionarPage() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [importado, setImportado] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await AdicionarProduto({
      nome,
      preco,
      descricao,
      estoque,
      importado: importado ? 1 : 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nomeProduto">Nome do Produto:</label>
        <input
          type="text"
          id="nomeProduto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="precoProduto">Preço do Produto:</label>
        <input
          type="text"
          id="precoProduto"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="descricaoProduto">Descrição do Produto:</label>
        <input
          type="text"
          id="descricaoProduto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="estoque">Estoque:</label>
        <input
          type="text"
          id="estoque"
          value={estoque}
          onChange={(e) => setEstoque(Number(e.target.value))}
        />
      </div>

      <label htmlFor="importado">
        <input
          type="checkbox"
          id="importado"
          checked={importado}
          onChange={(e) => setImportado(e.target.checked)}
        />
        Importado:
      </label>

      <button type="submit">Adicionar Produto</button>
    </form>
  );
}
