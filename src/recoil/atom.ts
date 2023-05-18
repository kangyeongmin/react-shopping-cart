import { atom } from "recoil";
import { ProductListType } from "../types/domain";

export const productsState = atom<ProductListType>({
  key: "products",
  default: [],
});

export const selectedProductsState = atom<ProductListType>({
  key: "selectedProducts",
  default: [],
});
