import { useState } from 'react';

import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName) {
    alert(`Bonjour ${firstName} , si on a entré ${firstName} dans l'input field!`);
    setFirstName('');

    }
    else {
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

export default App;


