import { Link } from "react-router-dom";

import Card from "../components/Card";
import Layout from "../components/Layout";

import { usePosts } from "../hooks/usePosts";
import Pagination from "../components/Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

function AllPosts() {
  const [currentPage, setCurrentPage] = useState(1);

  const { posts, pagesCount } = usePosts({
    limit: ITEMS_PER_PAGE,
    currentPage,
  });

  return (
    <Layout>
      <div className="container my-4">
        <div className="row">
          <main className="col-md-12">
            <h2 className="mb-3">Todos os posts</h2>

            <div className="d-flex gap-2 justify-content-between flex-wrap">
              {posts.map((item) => (
                <div key={item.sys.id} className="w-25">
                  <Card
                    title={item.fields.blogPostTitle}
                    text={item.fields.blogPostDescription}
                    link={"/post/" + item.fields.blogPostSlug}
                  />
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between align-items-start mt-4">
              <Link to="/" className="btn btn-dark">
                Voltar para a home
              </Link>

              <Pagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default AllPosts;
