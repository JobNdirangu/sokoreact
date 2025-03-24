import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carouselcomponent from "./Carouselcomponent";

const Getproducts = () => {
  // initialize hooks
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  // const [search, setSearch] = useState("");
  // navigate hook
  const navigate = useNavigate();

  // img url
  const img_url = "https://gitosh.pythonanywhere.com/static/images/";

  // function to fetch data form api
  const getproducts = async () => {
    setLoading("Please Wait...");
    try {
      const response = await axios.get(
        "https://gitosh.pythonanywhere.com/api/get_product_details"
      );
      setLoading("");
      setError("");
      setProduct(response.data);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // Filtered products based on search
  const [search, setSearch] = useState("");
  const filtered_products = product.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())||
    item.product_description.toLowerCase().includes(search.toLowerCase())

  );

  // Extracting logged in user from storage
    // const user=JSON.parse(localStorage.getItem("user"))

  return (
    <div className="row container-fluid">
      {/* <p>Welcome: {user.username}</p> */}
      <Carouselcomponent />
      <span className="text-info">{loading}</span>
      <span className="text-danger">{error}</span>
      <h3>Available Products</h3>

      {/* Search Input */}
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display Filtered Products */}
      {/* {filtered_products.length > 0 ? ( */}
        {filtered_products.map((product) => (
          <div className="col-md-3 justify-content-center mb-4" key={product.id}>
            <div className="card shadow text-center">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product_img"
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0,15)}</p>
                <b className="text-warning">{product.product_cost}</b> <br />
                <button
                  onClick={() =>
                    navigate("/makepayment", { state: { product, img_url } })
                  }
                  className="btn btn-dark"
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        ))}
      {/* ) : (
        <p className="text-center text-danger">No products found.</p>
      )} */}
    </div>
  );
};

export default Getproducts;
