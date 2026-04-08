

function Bouton({ texte = 'Clique pour voir', couleur, onClick }) {
  return (
    <button style={{ backgroundColor: couleur }}
      className="text-white border-2 border-blue-500 px-6 rounded-xl py-2 cursor-pointer"
      onClick={onClick}>
      {texte} 
    </button>
  );
}
export default Bouton