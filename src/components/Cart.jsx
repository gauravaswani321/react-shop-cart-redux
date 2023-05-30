import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (productid) => {
    dispatch(remove(productid));
  }

  console.log(cartProducts);
  return (
    <>
      <div className='products grid xl:grid-cols-4 md:grid-cols-2 gap-6'>
        {cartProducts.map((product) => (
          <div className="max-w-sm py-4 rounded text-center shadow-lg" key={product.id}>
            <img className="w-9/12 object-contain h-[250px] mx-auto" src={product.image}/>
            <div className="px-6 py-4">
              <h3 className="font-semibold text-[18px] text-xl mb-2">{product.title}</h3>
              <p className="">₹ {product.price}/-</p>
              <button onClick={() => removeFromCart(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;