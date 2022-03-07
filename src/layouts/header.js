import React,{Component} from "react";  
import { Link } from "react-router-dom";
import cart from "../images/cart.png";
class Header extends Component{ 
    constructor(props){ 
        super(props)
        this.state={

        }
    }
    render(){
        return( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Shoppin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item ">
                            <Link class="nav-link" to="items">Home <span class="sr-only"></span></Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li> */}
                        <li class="cart-icon" style={{marginLeft:"1010px"}}>
                            <Link class="nav-link" to="cart"><img src={cart} style={{height:"25px"}} /> {this.props.cartItems?this.props.cartItems:"+"}</Link> 
                           
                        </li>
                        
                            </ul>
                </div>
                </nav>
            </div>
        )
    }
} 
export default Header;