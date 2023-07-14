import { create } from "zustand";
import { supabase } from "./lib/api";

const useStore = create((set) => ({
  categories: [],
  subcategories: [],
  tools: [],
  getCategories: async () => {
    const { data } = await supabase.from("Tools").select("Category");
    const uniqueCategories = [...new Set(data.map((item) => item.Category))];
    const categoriesWithSubcategories = uniqueCategories.map((category) => ({
      name: category,
      subcategories: [],
    }));
    for (const category of categoriesWithSubcategories) {
      const { data } = await supabase
        .from("Tools")
        .select("Subcategory")
        .eq("Category", category.name);
      category.subcategories = [...new Set(data.map((item) => item.Subcategory))];
    }
    set({ subcategories: categoriesWithSubcategories });
  },
  getTools: async () => {
    const { data } = await supabase.from("Tools").select("*");
    set({ tools: data });
  }
}));

export default useStore;
