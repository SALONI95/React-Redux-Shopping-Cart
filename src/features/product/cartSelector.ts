import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { ITEMS } from "../../productData/product";

export const cartItemsWithOffers = createSelector(
  [(state: RootState) => state.product.cartItems],
  (cartItems) => {
    const cartAfterOffer = structuredClone(cartItems);
    const isCheeseItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.CHEESE
    );
    if (isCheeseItemExist) {
      isCheeseItemExist.discount =
        (isCheeseItemExist.product.price *
          (isCheeseItemExist.quantity - (isCheeseItemExist.quantity % 2))) /
        2;
    }

    const isSoupItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.SOUP
    );
    if (isSoupItemExist) {
      const isBreadItemExist = cartAfterOffer.find(
        (item) => item.product.name == ITEMS.BREAD
      );

      if (isBreadItemExist) {
        isBreadItemExist.discount += isBreadItemExist.product.price / 2;
      }
    }
    const isButterItemExist = cartAfterOffer.find(
      (item) => item.product.name == ITEMS.BUTTER
    );
    if (isButterItemExist) {
      isButterItemExist.discount =
        (isButterItemExist.product.price *
          (isButterItemExist.quantity - (isButterItemExist.quantity % 3))) /
        3;
    }

    const subTotal: number = +cartAfterOffer
      .reduce((total, items) => total + items.product.price * items.quantity, 0)
      .toFixed(2);
    const discount: number = +cartAfterOffer
      .reduce((totalDiscount, items) => totalDiscount + items.discount, 0)
      .toFixed(2);

    const totalAmount: number = subTotal - discount;

    const billDetails = {
      subTotal,
      discount,
      totalAmount: totalAmount.toFixed(2),
    };
    return { cartAfterOffer, billDetails };
  }
);
