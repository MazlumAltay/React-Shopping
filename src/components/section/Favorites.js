import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

export class Favorites extends Component {

    static contextType = DataContext;

    render() {
        const {favorites,addFavorites} = this.context;
        return (
            <div id="product">
               {
                   favorites.map(product =>(
                       <div className="favorites" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>₺{product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={()=> addFavorites(product._id)}>Favorilere ekle</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Favorites
