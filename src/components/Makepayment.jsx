import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Makepayment = () => {
  const { product, img_url } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Submit function
  const submit = async (e) => {
    e.preventDefault();
    setLoading("Processing payment...");
    // Prepare data
    const data = new FormData();
    data.append("phone", phone);
    data.append("amount", product.product_cost);

    try {
      const response = await axios.post(
        "https://jobsimba.pythonanywhere.com/api/mpesa_payment",
        data
      );
      setLoading("");
      setError("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-success text-white text-center">
              <h3>Make Payment</h3>
            </div>
            <div className="card-body text-center">
              {/* Product Image */}
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />

              {/* Product Details */}
              <h4 className="text-dark">{product.product_name}</h4>
              <p className="text-muted">{product.product_description}</p>
              <h5 className="text-warning mb-4">Ksh {product.product_cost}</h5>

              {/* Feedback Messages */}
              {loading && <span className="text-info mb-3 d-block">{loading}</span>}
              {success && <span className="text-success mb-3 d-block">{success}</span>}
              {error && <span className="text-danger mb-3 d-block">{error}</span>}

              {/* Payment Form */}
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fs-5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="254..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makepayment;
