import React from 'react';
import './App.css';
import Cards from './Component/Cards/Cards'
import {fetchData} from './api.js'
import Chart from './Component/Chart/Chart'
import Countries from './Component/CountryPicker/CountryPicker';
import Footer from './Component/Footter/Footer'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{},
      country:''
    }
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

   async componentDidMount() {
    const data =await fetchData();

    this.setState({ data});
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  
  render(){
    
    console.log(this.state.data)
    return (
      <div className="App">
        <h1 className="Head">Coronavirus</h1>
          <Cards data={this.state.data} country={this.state.country}/>
          <Countries  handleCountryChange={this.handleCountryChange} /><br/>
       <Chart data={this.state.data} country={this.state.country} /> <br/>
       <Footer/>
       
      </div>
    );



}





 
}

export default App;
/* 

 */