import { useDispatch, useSelector } from "react-redux";
import { cartItemsWithOffers } from "../features/product/cartSelector";
import { addToCart, removeItem } from "../features/product/productSlice";

export function CartList() {
  const { cartAfterOffer, billDetails } = useSelector(cartItemsWithOffers);
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-50 h-screen flex flex-col rounded-2xl p-2 m-1">
      <div className="text-center text-7xl">Basket</div>
      <div className="divide-y divide-gray-200">
        {cartAfterOffer.map((item) =>
          item ? (
            <div>
              <div className="flex justify-between text-center">
                <div>{item.product.name}</div>
                <div>{item.product.price}</div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => dispatch(addToCart(item.product))}
                    className=" border-blue-400 rounded-xl p-1 mx-3 border-0 bg-blue-400"
                  >
                    +
                  </button>

                  {/* <VarianceButton addItem= {addItem} type="plus" /> */}
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => dispatch(removeItem(item.product.id))}
                    className=" border-blue-400 rounded-xl p-1 mx-3 border-2"
                  >
                    -
                  </button>

                  {/* <VarianceButton type="minus" /> */}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div>
                  <span>Item Cost : </span>
                  {item.quantity * item.product.price}
                </div>
                {item.discount != 0 && (
                  <div>
                    <span>Saved : </span>
                    {item.discount}
                  </div>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
      {cartAfterOffer.length > 0 && (
        <div className="flex flex-col">
          <div>Sub Total: {billDetails.subTotal}</div>
          <div>Discount: {billDetails.discount}</div>
          <div>Total Amount: {billDetails.totalAmount}</div>
        </div>
      )}
      {cartAfterOffer.length == 0 && <div>Empty Basket. Please Add Items</div>}
    </div>
  );
}
