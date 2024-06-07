import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import Layout from "../components/Layout";
import { contentfulClient } from "../utils/createContentfulClient";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const response = await contentfulClient.getEntries({
        content_type: "blogPost5j",
        "fields.blogPostSlug": slug,
      });

      setPost(response.items[0] || null);
    } catch (error) {
      console.log("Erro ao buscar o post", error);
      setPost(null);
    }
  }, [slug]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <Layout>
      <main className="container my-4">
        <div className="row">
          <div className="col">
            {!post && <div>Carregando...</div>}

            {post && (
              <>
                <h1>{post.fields.blogPostTitle}</h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(post.fields.blogPostContent),
                  }}
                />

                <Link to="/" className="btn btn-primary mt-4">
                  Voltar para Home
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Post;
