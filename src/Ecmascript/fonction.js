// Fonction de recherche par ID (ES6)
// Retourne l'objet trouvé, sinon undefined

export const Search = (tab, id) => tab.find((item) => item.ID === id);
