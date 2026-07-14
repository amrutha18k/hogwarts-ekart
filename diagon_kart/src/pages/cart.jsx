import {Navbar} from '../navbar.jsx';
import { Footer } from '../footer.jsx';
import '../cart.css';
import '../shop.css';


function CartQuantity({product,addQuantity,subQuantity}){
    return(
        <div className="qty-cnt">
            <button onClick={
                () => subQuantity(product)
            }>-</button>

            <input
                className="qty-inp"
                type="number"
                value={product.quantity}
                readOnly
            />

            <button onClick={
                ()=>addQuantity(product)
            }>+</button>
        </div>
    );
}

function ProductCart({cart,removeFromCart,addQuantity,subQuantity}){
    if(cart.length!==0){
        return (
            cart.map((product)=>{
                return (
                    <div className="product-cnt" key={product.id}>
                       <div className="product-img-cnt">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">Rs.{product.price}</p>
                        <CartQuantity
                            product={product}
                            addQuantity={addQuantity}
                            subQuantity={subQuantity}
                        />
                        <button onClick={() => removeFromCart(product)}>Remove Item</button>               
                    </div>
                );
            })
        );
    }
}



function findTot(cart){
    let totQ=0;
    cart.forEach(elm => {
        totQ+=elm.quantity;
    });
    return totQ;
}

function totPrice(cart){
    let tot=0;
    cart.forEach((elm)=>{
        tot+=(elm.price*elm.quantity);
    });
    return tot;
}

function OrderSummary({cart}){
    if(cart.length!=0){
        return(
            <div className="order-sum">
                <p className='title'>Your magical items summary:</p>
                <div className="order-info">
                    <p className="item"><strong>Items: </strong> </p>
                    <p className="item">{findTot(cart)}</p>
                </div>
                {cart.map((item)=>{
                    return (
                        <div class="order-info"key={item.id}>
                            <p className='item'>{item.name}</p>
                            <p className='item'>{item.quantity}</p>
                            <p className='item'>{item.price}</p>
                        </div>
                    );
                })}
                <div class="order-info">
                    <p className="item">Total: </p>
                    <p className="item">{totPrice(cart)}</p>
                </div>
                <button className="btn">Proceed to buy</button>
            </div>
         );
    }
    
}

export function Cart({cart,removeFromCart,addQuantity,subQuantity}){
    return (
        <>
            <Navbar />
            <div className="cart-pg">
                <div className="para">
                    <span>Your Cart</span>
                    <p>{cart.length===0?"You cart is empty! :)":`You have ${cart.length} magical items waiting for you! ✨`}</p>
                </div>
                <div className="products-cnt">
                    <ProductCart cart={cart} removeFromCart={removeFromCart} addQuantity={addQuantity} subQuantity={subQuantity}/>
                </div>
                <div className='order-cnt'>
                    <OrderSummary cart={cart}/>
                </div>
            </div>
            <Footer />
        </>
    );
}