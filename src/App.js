import {Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Animation from './Components/Animation';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menuView: false
    }
  }

  toggleMenuView = () => {
    this.setState({menuView: !this.state.menuView})
  }

  render(){
    let {menuView} = this.state;

    return (
      <section className="App">
        <Header 
          menuView={menuView}
          toggleMenuFn={this.toggleMenuView}/>
        <Main />
        <Animation />
      </section>
    )
  }
}

export default App;