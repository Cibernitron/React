
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate()


  const deconnexion = (event) => {
    event.preventDefault();
      navigate(`/`);

  };
  return (
    <>
    <h1>Erreur 404</h1>
      <button onClick={deconnexion}> Retour à l`accueil</button>
    </>
  );
}

export default Error;