import { useCallback, useEffect, useState } from "react";
import { contentfulClient } from "../utils/createContentfulClient";

const defaultOptions = {
  limit: 5,
  currentPage: 1,
};

export const usePosts = (options = defaultOptions) => {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const getPosts = useCallback(async () => {
    try {
      const response = await contentfulClient.getEntries({
        content_type: "blogPost5j",
        order: "-sys.createdAt",
        skip: options.limit * (options.currentPage - 1) || 0,
        limit: options.limit,
      });

      setPosts(response.items);
      setTotalCount(response.total);
      setPagesCount(Math.ceil(response.total / response.limit));
    } catch (error) {
      console.log("Erro ao obter posts", error);
      setPosts([]);
    }
  }, [options.currentPage, options.limit]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return { posts, totalCount, pagesCount };
};
