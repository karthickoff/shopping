import React,{Component } from "react";  
import shampo from "../images/shampoo1.png"; 
import Moisturizer from "../images/moisturixer.jpg"; 
import Shoe from "../images/shoes.jpg"; 
import Perfume from "../images/perfume.jpg"; 
import Header from "../layouts/header";
class Items extends Component{
    render(){
        return( 
            <div>
                <div className="container">  
                <div className="row">
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={shampo} alt="Card image cap" style={{height:"230px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Shampo</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button  class="btn btn-primary" name="shampo" onClick={this.props.handle} >Add to cart</button>
                    </div>
                </div>
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Perfume} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Perfume</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary" name="perfume" onClick={this.props.handle}>Add to cart</button>
                    </div>
                </div>
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Moisturizer} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Moisturizer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary" name="moisturizer"  onClick={this.props.handle}>Add to cart</button>
                    </div>
                </div>
                <div class="card col-lg-4" style={{width: "18rem"}}>
                    <img class="card-img-top" src={Shoe} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Shoe</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary" name="shoe" onClick={this.props.handle}>Add to cart</button>
                    </div>
                </div>
                </div>
            </div>

            </div>
           
        )
    }
} 
export default Items;