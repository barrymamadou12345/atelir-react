import { useState } from "react";
import "./App.css";
import Bouton from "./components/ui/Button";

function App() {
  const competences = ["JavaScript", "React", "HTML/CSS", "Git"];

  const [count, setCount] = useState(0);
  const [nom, setNom] = useState("Mamadou Barry");
  const metier = "Développeur React";
  const telephone = "784296313";

  const HandleClique = () => {
    setCount(count + 1);
    setNom("Moussa");
  };
  const HandleChangeName = () => {
  };

  return (
    <div className="App">
      <h1 onClick={HandleChangeName} className="h1">
        {nom}
      </h1>
      <h2 className="h1">{metier}</h2>
      <h3 onClick={HandleClique} className="h1">
        {telephone}
      </h3>

      <ul>
        {competences.map((comp, index) => (
          <li key={index}>{comp}</li>
        ))}
      </ul>

      <Bouton texte="Incrementer" couleur={'#000'} onClick={HandleClique} />

      <div className="count">{count}</div>
    </div>
  );
}

export default App;
