import { create } from "zustand";
// this is in lad test
export const useProductStore = create((set) => ({
  products: [],
  isLoading: true,
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please provide all fields" };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Please created successfully" };
    } catch (e) {
      console.log("Error creating product", e.message);
      return { success: false, message: "Server Error" };
    }
  },
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data.data, isLoading: false });
      return data;
    } catch (e) {
      console.log("Error fetching products-frontend", e.message);
      set({ isLoading: false });
    }
  },
  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));
      return { success: true, message: data.message };
    } catch (e) {
      console.log("Error deleting", e);
    }
  },
  updateProduct: async (pid, product) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  },
}));
