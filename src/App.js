import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor (props) {
  super (props)
  this.state = {
    fact : ''
    };
    this.getFact = this.getFact.bind(this);
 }

 getFact() {
   axios.get("https://api.chucknorris.io/jokes/random")
   .then(response => {
     this.setState ({ fact: response.data.value });
   }).catch (error => {
     console.log(error);
   });
  }


render() {
  return (
    <div className ="container text-center">
      <h1> Chuknorris Jokes</h1>
      <h3> {this.state.fact} </h3>
      <div className = "col-6 searchJokeCol">
      <div className = "card">
        <div className = "card-header">
          Search item
        </div>
        <div className = "card-body">
          <Input type = "text"/>
        </div>
       </div>

       <Button className = "btn" variant = "contained" color = "primary"
        onClick = {this.getFact}>
<<<<<<< HEAD
        Generate more jokes
       </Button>
=======
        More chuknoris Jokes
      </Button>
>>>>>>> 15c6959ec55a3b84fa3f52eb7ec5731ea8fba54b
    </div>
  </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;

