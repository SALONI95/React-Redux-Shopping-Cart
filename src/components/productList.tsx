import { useState } from "react";
import type { IProduct } from "../types/product";
import { products } from "../productData/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/product/productSlice";

export function ProductList() {
  const [productlist, setProductList] = useState<IProduct[]>(products);
  const dispatch = useDispatch();

  const handleCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="bg-white w-50 h-screen flex flex-col rounded-2xl p-2 m-1">
        <div className="text-7xl text-center">Product</div>

        <div className="divide-y divide-gray-200">
          {productlist.map((product) => (
            <div className="flex justify-between" key={product.id}>
              <h1>{product.name}</h1>
              <h1>{product.price}</h1>

              <button
                onClick={() => {
                  handleCart(product);
                }}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
