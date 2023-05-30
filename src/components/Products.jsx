import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/apiSlice";

const Products = () => {

    const dispatch = useDispatch();

    const { products, loading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const addToCart = (product) => {
        dispatch(add(product));
    }

    return(
        <>
            <div className='products grid xl:grid-cols-4 md:grid-cols-2 gap-6'>
                {products.map((product) => (
                    <div className="max-w-sm py-4 rounded text-center shadow-lg" key={product.id}>
                        <img className="w-9/12 object-contain h-[250px] mx-auto" src={product.image}/>
                        <div className="px-6 py-4">
                            <h3 className="font-semibold text-[18px] text-xl mb-2">{product.title}</h3>
                            <p className="">₹ {product.price}/-</p>
                            <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
