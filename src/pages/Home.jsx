import { Link } from "react-router-dom";

import Card from "../components/Card";
import Layout from "../components/Layout";

import { usePosts } from "../hooks/usePosts";
import { useCategories } from "../hooks/useCategories";

function Home() {
  const categories = useCategories();
  const { posts } = usePosts({ limit: 5 });

  return (
    <Layout>
      <div className="container my-4">
        <div className="row">
          <main className="col-md-8">
            <h2 className="mb-3">Posts recentes</h2>

            {posts.map((item) => (
              <Card
                key={item.sys.id}
                title={item.fields.blogPostTitle}
                text={item.fields.blogPostDescription}
                link={"/post/" + item.fields.blogPostSlug}
              />
            ))}

            <Link to="/posts" className="btn btn-dark mt-4">
              Ver todos os posts
            </Link>
          </main>

          <aside className="col-md-4">
            <h2>Categorias</h2>

            <ul>
              {categories.map((item) => (
                <li key={item.sys.id}>{item.fields.blogCategoryTitle}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
