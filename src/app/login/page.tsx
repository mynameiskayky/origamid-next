import Cookie from "@/componets/cookie";
import { Login } from "@/componets/login";

export default async function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <Cookie />
      <Login />
    </main>
  )
}