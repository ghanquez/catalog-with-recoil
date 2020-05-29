import { selector } from "recoil";
import { cart } from "./atoms";

export const cartState = selector({
  key: "cartState",
  get: ({ get }) => {
    const totalQty = get(cart).reduce((a, b) => a + b.qty, 0);
    const totalCost = get(cart).reduce((a, b) => a + b.qty * b.price, 0);
    return {
      totalQty,
      totalCost,
    };
  },
});
