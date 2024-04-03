import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
    <h1>Error Page</h1>
    <Link to={"/"}>
        <button>Retourner vers la page d'accueil</button>
    </Link>
</div>
  )
}