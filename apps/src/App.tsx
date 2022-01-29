import React from 'react';
import Info from './components/Info'
import './App.css';

interface IState {
  nama: string;
  kelas: string;
  Pagiorsiang: boolean;
  counter: number
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      nama: 'Noble',
      kelas: 'XD',
      Pagiorsiang: true,
      counter: 1 
    }
  }

  handleClick = () => {
    console.log("button clicked...");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render () {
    console.log("render called...");
    return (
      <div style = {{textAlign:'center'}}>
        <Info nama="Noble" kelas ="XD" Pagiorsiang = {true}/>
        <h1>
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.handleClick}>
          click me
        </button>
      <h2><img src='https://via.placeholder.com/150x150'></img></h2>

        
      </div>
    );
  }
}

export default App;
