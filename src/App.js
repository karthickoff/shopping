import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React ,{Component} from "react"; 
import Items from './components/items';
import Header from './layouts/header';
import Cart from './components/cart';
class App extends Component{ 
  constructor(props){
    super(props)
    this.state={
      cartItems:0, 
      perfumeCount:0, 
      shoesCount:0, 
      shampooCount:0, 
      MoisturizerCount:0,
    } 
    this.IncCartItems=this.IncCartItems.bind(this);
    this.DecCartItems=this.DecCartItems.bind(this);

  } 
  IncCartItems(e) { 
    console.log(e.target.name);
    this.setState({cartItems:this.state.cartItems + 1}) 
    switch(e.target.name){
      case 'perfume':
        this.setState({perfumeCount:this.state.perfumeCount+1}) 
        break 
      case 'shoe' :
        this.setState({shoesCount:this.state.shoesCount+1}) 
        break 
      case 'shampo':
        this.setState({shampooCount:this.state.shampooCount+1}) 
        break  
      case 'moisturizer':
        this.setState({MoisturizerCount:this.state.MoisturizerCount+1}) 
        break  
    }
  
  }  
  DecCartItems(e){
    this.setState({cartItems:this.state.cartItems - 1}) 
    switch(e.target.name){
      case 'perfume':
        this.setState({perfumeCount:this.state.perfumeCount-1}) 
        break 
      case 'shoe' :
        this.setState({shoesCount:this.state.shoesCount-1}) 
        break 
      case 'shampo':
        this.setState({shampooCount:this.state.shampooCount-1}) 
        break  
      case 'moisturizer':
        this.setState({MoisturizerCount:this.state.MoisturizerCount-1}) 
        break  
    }
  }
  render(){
    return( 
      <BrowserRouter> 
        <Route path='/'><Header cartItems={this.state.cartItems}/></Route>
      <Switch>
        <Route path='/items' > <Items handle={this.IncCartItems}/> </Route>
        <Route path='/cart' > <Cart detials={this.state} handleRemove={this.DecCartItems} handleAdd={this.IncCartItems} /></Route>
      </Switch> 
       {/* <div> 
      
        <Items/> 
        <Cart/>
        
      </div> */}
      </BrowserRouter>
     
    )
  }
}

export default App;
