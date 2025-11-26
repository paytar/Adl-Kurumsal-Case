import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
};

export type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
}));
