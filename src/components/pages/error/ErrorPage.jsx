
import { useNavigate } from 'react-router-dom'; // Ajout de l'import toNavigate

function Error() {
  // Récupérer le prénom à partir des paramètres d'URL
  const navigate = useNavigate()


  const deconnexion = (event) => {
    event.preventDefault();
      navigate(`/`);

  };
  return (
    <>
    <h1>Erreur 404</h1>
      <button onClick={deconnexion}> Retour à l'accueil</button>
    </>
  );
}

export default Error;



