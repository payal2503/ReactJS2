import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    // console.log("main component constructor");
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  // componentDidMount(){
  //   console.log("Main component componentDidMount invoked");
  // }

  // componentDidUpdate(){
  //   console.log("Main component componentDidUpdate invoked");
  // }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    // console.log("Main Component render invoked");
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail selectedDish ={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }
}

export default Main;