import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Kaban",
                "src": "https://www.dufy.com.tr/Uploads/UrunResimleri/buyuk/lacivert---pitikare-erkek-ceket---galvin-b93c.jpg",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 259,
                "colors": [],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Ceket",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jBydURSnANuiZSTSx2NODUUt_3VIsfDFUg&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 199,
                "colors": [],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Gömlek",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDG6WeQNsd-tMdKcT6_u7ngE6mWgbVxQJ-g&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 159,
                "colors": [],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Kaban",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktAZG1CUGf9O4Z1kA7U6quIBY3TOCZQcYPA&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 219,
                "colors": [],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Gömlek",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuCUlHH46vCyumgyzN1tFSt-BI8Reily6VQ&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 119,
                "colors": [],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Ceket",
                "src": "https://cdn.cimri.io/image/240x240/avva-a91y4006-bej-erkek-kruvaze-ceket_359910646.jpg",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 109,
                "colors": [],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Gömlek",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQC7sWYgDh8eEbxD2DkWnvTu-5klV1NHd8w&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 69,
                "colors": [],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Ceket",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhynWRvwCT9T9HJOuyK6p509s7QQPbibc5g&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "price": 99,
                "colors": [],
                "count": 1
            },            
            {
                "_id": "9",
                "title": "Kaban",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN5OB_YPMWznufJwPgeh8UiGJzThUIqMHNA&usqp=CAU",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis!.",
                "price": 189,
                "colors": [],
                "count": 1
            },
        ],
        cart: [],
        favorites: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("Ürün sepete eklendi.")
        }
    };

    addFavorites = (id) =>{
        const {products, favorites} = this.state;
         products.map(item => {
            if(item._id === id) {
                //this.setState({favorites: [item]})
                favorites.push(item)
                console.log(favorites)
            }
         })
        //this.setState({favorites:[]}) 
    };



    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Bu ürünü silmek istiyor musunuz?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    removeFavorites = id =>{
        if(window.confirm("Bu ürünü silmek istiyor musunuz?")){
            const {favorites} = this.state;
            favorites.forEach((item, index) =>{
                if(item._id === id){
                    favorites.splice(index, 1)
                }
            })
            this.setState({favorites: favorites});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total, favorites} = this.state;
        const {addCart, addFavorites, reduction,increase,removeProduct,removeFavorites,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, favorites, addFavorites, cart, reduction,increase,removeProduct,removeFavorites,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}


