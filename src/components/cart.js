import React, {Component} from "react";  
import shampo from "../images/shampoo1.png"; 
import Moisturizer from "../images/moisturixer.jpg"; 
import Shoe from "../images/shoes.jpg"; 
import Perfume from "../images/perfume.jpg"; 
import Header from "../layouts/header"; 
import "../components/styles/cart.css";
class Cart extends Component {
    render() {
        return(
            <div className="cartList"> 
               
                <h3> Your Cart items {this.props.detials.cartItems}</h3> 
                {/* shampoo */} 
                {this.props.detials.shampooCount?
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={shampo} alt="Card image cap" style={{height:"230px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Shampo</h5>
                        <p class="card-text">{this.props.detials.shampooCount}</p> 
                        <span><button name="shampo"  className="btn btn-primary" onClick={this.props.handleAdd}>Add</button>  <button  name="shampo" className="btn btn-primary"  onClick={this.props.handleRemove}>Remove</button></span>
                    </div>
                </div> 
                :""} 
                {/* perfume */}  
                {this.props.detials.perfumeCount?
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Perfume} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Perfume</h5>
                        <p class="card-text">{this.props.detials.perfumeCount}</p>
                        <span><button  className="btn btn-primary" name="perfume"  onClick={this.props.handleAdd}>Add</button>  <button  className="btn btn-primary" name="perfume" onClick={this.props.handleRemove}>Remove</button></span>

                    </div>
                </div>  
                :""}
                {/* moisturizer */  }  
                {this.props.detials.MoisturizerCount?
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Moisturizer} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Moisturizer</h5>
                        <p class="card-text">{this.props.detials.MoisturizerCount}</p>
                        <span><button  className="btn btn-primary" name="moisturizer"  onClick={this.props.handleAdd} >Add</button>  <button  className="btn btn-primary" name="moisturizer" onClick={this.props.handleRemove}>Remove</button></span>
                    </div>
                </div> :
                ""}
                    {/* shoe */}
                <div>
                {this.props.detials.shoesCount?
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Shoe} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Shoe</h5>
                        <p class="card-text">{this.props.detials.shoesCount}</p>
                        <span><button className="btn btn-primary" name="shoe"  onClick={this.props.handleAdd} >Add</button>  <button  className="btn btn-primary" name="shoe" onClick={this.props.handleRemove}>Remove</button></span>

                    </div>
                </div>
                :""}
                </div> 
               {this.props.detials.cartItems ?<button className="btn btn-secondary">Place Order</button>:''}
            </div>
        )
    }
} 
export default Cart;  