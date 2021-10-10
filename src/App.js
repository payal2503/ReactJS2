//import logo from './logo.svg';
import React , { Component } from 'react';  
import { Navbar,NavbarBrand  } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishDetailComponent';




class App extends Component {

  constructor(props){
    super(props);
    
    this.state={
      dishes: DISHES
    };
    
  }
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">
            Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        <DishDetail  />
      </div>
    );
  }
}

export default App;



