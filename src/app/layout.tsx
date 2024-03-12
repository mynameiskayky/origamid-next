import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ul className="menu">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/cursos'}>Cursos</Link></li>
          <li><Link href={'/imc'}>Calcular IMC</Link></li>
        </ul>
        {children}
      </body>
    </html>
  );
}
