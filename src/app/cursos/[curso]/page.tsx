import { getCurso } from "@/api/cursos";
import Link from "next/link";

export default async function CursoPage(slug: {
  params: {
    curso: string;
  };
}) {
  const curso = await getCurso(slug.params.curso);

  return (
    <div>
      <h1>Curso: {curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total de aulas: {curso.total_aulas}</p>
      <p>Total de horas: {curso.total_horas}</p>
      <br />
      <h3>Aulas</h3>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${curso.slug}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

