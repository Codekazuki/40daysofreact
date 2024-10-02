import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseQuantity } = useGlobalContext();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        <button onClick={() => removeItem(id)} className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => increaseQuantity(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button
          className='amount-btn'
          onClick={() => {
            console.log("decrease by 1");
          }}
        >
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
