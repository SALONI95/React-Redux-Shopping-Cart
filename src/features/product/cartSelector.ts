import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { ITEMS, products } from "../../productData/product";

export const cartItemsWithOffers = createSelector(
  [(state: RootState) => state.product.cartItems],
  (cartItems) => {
    const cartAfterOffer = structuredClone(cartItems);
    const isCheeseItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.CHEESE
    );
    if (isCheeseItemExist) {
      isCheeseItemExist.quantity += 1;
      isCheeseItemExist.discount = isCheeseItemExist.product.price;
    }

    const isSoupItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.SOUP
    );
    if (isSoupItemExist) {
      const isBreadItemExist = cartAfterOffer.find(
        (item) => item.product.name == ITEMS.BREAD
      );

      if (isBreadItemExist) {
        isBreadItemExist.quantity += 1;
        isBreadItemExist.price += isBreadItemExist.product.price;
        isBreadItemExist.discount += isBreadItemExist.product.price / 2;
      } else {
        const breadItem = products.find((items) => items.name == ITEMS.BREAD);
        if (breadItem) {
          cartAfterOffer.push({
            product: breadItem,
            price: breadItem.price,
            quantity: 1,
            discount: breadItem.price / 2,
          });
        }
      }
    }
    const isButterItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.BUTTER
    );
    if (isButterItemExist && isButterItemExist.quantity > 2) {
      isButterItemExist.discount = isButterItemExist.product.price;
    }

    const subTotal = cartAfterOffer.reduce(
      (total, items) => total + items.product.price * items.quantity,
      0
    );
    const discount = cartAfterOffer.reduce(
      (totalDiscount, items) => totalDiscount + items.discount,
      0
    );

    const totalAmount = subTotal - discount;

    const billDetails = {
      subTotal,
      discount,
      totalAmount,
    };
    return { cartAfterOffer, billDetails };
  }
);
