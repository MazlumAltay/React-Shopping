import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

export class Favorites extends Component {

    static contextType = DataContext;

    render() {
        const {favorites,addFavorites, removeFavorites} = this.context;
        return (
            <div id="product">
               {
                   favorites.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>₺{product.price}</span>
                               <p>{product.description}</p>
                                {()=> addFavorites(product._id)}
                                <button className="favorites" onClick={() => removeFavorites(product._id)}> Sil </button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Favorites
