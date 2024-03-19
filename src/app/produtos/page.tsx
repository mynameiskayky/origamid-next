export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  const response = await fetch("https://api.origamid.online/produtos", {
    next: {
      revalidate: 5,
    },
  });
  const produtos = await response.json();

  return (
    <main>
      <ul>
        {produtos.map((produto: Produto) => (
          <li key={produto.id}>
            {produto.nome}: R$ {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  );
}
