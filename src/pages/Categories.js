import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title="All categories">
      <div className="container mt-4">
        <div className="row">
          {/* <h2 className="text-center mt-2">All Categories :</h2> */}
          {categories.map((c) => (
            <div className="col-md-4 mb-4" key={c._id}>
              <div className="card h-100 category-card">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text">{c.description}</p>
                  <Link
                    to={`/category/${c.slug}`}
                    className="stretched-link"
                  ></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
