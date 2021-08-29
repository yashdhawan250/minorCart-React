import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products: [
            {
                price:999,
                title: 'Phone',
                qty : 1,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1606&q=80',
                id:1
            },
            {
                price:9990,
                title: 'Laptop',
                qty : 1,
                img: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1657&q=80',
                id:2
            },
            {
                price:99,
                title: 'Watch',
                qty : 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                id:3
            }
        ]
    }
}
handleIncreaseQuantity = (product)=>{
    console.log('Increase qty',product);

    const{products}=this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;

    this.setState({
        products
    })
}
handleDecreaseQuantity = (product)=>{
    console.log('Decrease qty',product);

    const{products}=this.state;
    const index = products.indexOf(product);

    if(products[index].qty ===0)
    return;

    products[index].qty -=1;

    this.setState({
        products
    })
}

handleDeleteProduct=(id)=>{

    const {products} = this.state;

    const items = products.filter((item) =>item.id !== id);

    this.setState({
        products:items
    })

}
getCartCount = () =>{
  const {products} = this.state;
   let count =0;
   products.forEach((product)=> {
     count+=product.qty;

   });
   return count;
}
getCartTotal =()=>{
  const {products} = this.state;
  let cartTotal =0;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty*product.price;
  })
  return cartTotal;
}
  render(){
    const {products} = this.state;
  
    return ( 
    <div className = "App" >
      <Navbar count={this.getCartCount()}/>
       <Cart 
       products={products}
       onIncreaseQuantity = {this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteProduct= {this.handleDeleteProduct} 
       />    
       <div style={{ padding : 10 ,fontSize:20 }}>Total:{this.getCartTotal()}</div> 
   </div >
    );
}
}
export default App;