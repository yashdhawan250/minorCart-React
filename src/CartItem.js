import React from 'react' 

const CartItem= (props)=>{
   
        const {price,title,qty} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return(
            <div className="cart-item"> 
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
              <div style={{fontSize : 25}}>{title}</div>
              <div style={{color : '#777'}}>{price}</div>
              <div style={{color : '#777'}}>{qty}</div>
              <div className="cart-item-actions">
                  {}
                  <img 
                    alt="icon" 
                    className="action-icons" 
                    src="https://as2.ftcdn.net/v2/jpg/03/22/32/37/1000_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg"
                    onClick={()=> onIncreaseQuantity(product)}
                    />
                  <img 
                    alt="icon" 
                    className="action-icons" 
                    src=" https://as1.ftcdn.net/v2/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                    onClick={()=> onDecreaseQuantity(product)}
                    />
                  <img 
                    alt="icon" 
                    className="action-icons" 
                    src="https://as1.ftcdn.net/v2/jpg/02/58/95/14/1000_F_258951445_Md7JDFw3Qj4LPTorWUYdImTzS49fSnOf.jpg"
                    onClick={()=> onDeleteProduct(product.id)}
                    />
              </div>
            </div>
        </div>
        )
       
    }


const styles = {
    image:{
        height : 110,
        width:110,
        borderRadius:4,
        
    }
}

export default CartItem;