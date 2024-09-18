import React, { useCallback, useContext } from 'react';
import '../../styles/cart.css'; 
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/action/Action';

const Cart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
 // const {cart,removeFromCart}=useContext(DemoContext);
 const cart=useSelector((state)=>state.cart);
 const dispatch=useDispatch();

 const handleRemoveFromCart=(id)=>{
  dispatch(removeFromCart(id));
 }
console.log(cart);
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-data" onClick={(e) => e.stopPropagation()}>
        <div className='head'>
            <div style={{fontSize:"30px"}}>
                Cart Items
            </div>
            <div>
            <button className="crossButton" onClick={onClose}>X</button>
            </div>
      
        </div>
        <div className='scroll'>
        {cart.map((c)=>(
            <div className='singleItem'>  
                <div className='itemImg'>
                  <img src={c.img} alt="" />
                </div>
                <div className='itemName'>
                   {c.productName}
                </div>
                <div className='itmePrice'>
                 ${c.price}
                </div>
                <div className='itmePrice' onClick={()=>(handleRemoveFromCart(c.id))}>
                 <ImCross/>
                </div>
            </div>
         ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default Cart;