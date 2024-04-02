import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ajout de l'import toNavigate

function LoginPage() {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName) {
      // Redirection vers la page de commande avec le prénom comme paramètre d'URL
      navigate(`/order/${firstName}`);
      setFirstName('');
    } else {
      alert(`Champ "prénom" obligatoire`);
    }
  };

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <p>Connectez-vous</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={firstName}
          onChange={handleInputChange}
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  );
}

export default LoginPage;
