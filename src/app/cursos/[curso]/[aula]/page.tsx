import { getAula } from "@/api/cursos";
import Link from "next/link";

export default async function AulaPage(slug: {
  params: {
    curso: string;
    aula: string;
  };
}) {
  const aulaInfo = await getAula(slug.params.curso, slug.params.aula);

  return (
    <div>
      <Link href={`/cursos/${slug.params.curso}`}>Voltar</Link>
      <h1>Aula: {aulaInfo.nome}</h1>
      <p>{aulaInfo.descricao}</p>
      <p>Duração da Aula: {aulaInfo.tempo} minutos</p>
    </div>
  );
}

