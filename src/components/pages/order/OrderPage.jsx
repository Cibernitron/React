import { useNavigate } from 'react-router-dom'; // Ajout de l'import toNavigate
import { useParams } from 'react-router-dom';

function Order() {
  // Récupérer le prénom à partir des paramètres d'URL
  const { username } = useParams();
  const navigate = useNavigate()


  const deconnexion = (event) => {
    event.preventDefault();
      navigate(`/`);

  };
  return (
    <>
      <button onClick={deconnexion}> Déconnexion</button>
      <h1>Bonjour {username}, Bienvenue sur la page de commande</h1>
    </>
  );
}

export default Order;



