import React, { Component } from "react";
 
class UpdatingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor : Initialisation du composant");
  }
 
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps : Mise à jour de l'état à partir des props");
    return null;
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate : Faut-il mettre à jour le composant ?");
    return nextState.count % 2 === 0; 
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log("Le composant a été mis à jour");
    console.log("Ancien état :", prevState.count, "Nouvel état :", this.state.count);
  }
 
  handleClick = () => {

    this.setState({ count: this.state.count + 1 });
  };
 
  render() {
    console.log("Render : Génération du DOM");
    return (
      <div>
        <h1>Phase de Mise à Jour - UpdatingDemo</h1>
        <p>Compteur : {this.state.count}</p>
        <button onClick={this.handleClick}>Incrémenter</button>
      </div>
    );
  }
}
 
export default UpdatingDemo;
 