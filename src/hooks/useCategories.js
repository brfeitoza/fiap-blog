import { useEffect, useState } from "react";
import { contentfulClient } from "../utils/createContentfulClient";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await contentfulClient.getEntries({
        content_type: "blogCategory5j",
      });

      setCategories(response.items);
    } catch (error) {
      console.log("Erro ao obter categorias", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};
