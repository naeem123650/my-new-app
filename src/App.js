import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
class  App extends React.Component {

  constructor(){
    super();
    this.state ={
      loader:false,
      name:'',
      height:'',
      gender:''
    }
  }

  componentDidMount = () => {
      this.setState({loader:true})
      fetch("https://swapi.dev/api/people/1/")
          .then(res => res.json())
          .then(data => {
            this.setState({
              loader:false,
              name:data.name,
              height:data.height,
              gender:data.gender
            })
          })
  }

  render(){
    let display = this.state.loader ? 
    <Loader className="container text-center m-5" type="Circles" color="#00BFFF" height={100} width={100} timeout={3000}/> 
    :<FirstComponent data={{name:this.state.name,height:this.state.height,gender:this.state.gender}}/>
    return (
      <div className="App">
          {display}
      </div>
    );
  }  
  
}

export default App;
