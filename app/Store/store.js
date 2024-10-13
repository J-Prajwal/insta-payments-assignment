import { create } from "zustand";

const useStore = create((set) => ({
  deliveryDetails: {},
  paymentDetails: {},
  cartDetails: {},

  setCartDetails: (newCartDetails) => set({ cartDetails: newCartDetails }),
  setDeliveryDetails: (newDeliveryDetails) =>
    set({ deliveryDetails: newDeliveryDetails }),
  setPaymentDetails: (newPaymentDetails) =>
    set({ paymentDetails: newPaymentDetails }),
}));

export default useStore;
