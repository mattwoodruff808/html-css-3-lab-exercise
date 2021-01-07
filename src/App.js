import {Component} from 'react';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section className="App">
        <Header />
      </section>
    )
  }
}

export default App;