import React from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // Total price calculation
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  // Remove item from cart
  const removeCartItem = (pid) => {
    const updatedCart = cart.filter((item) => item._id !== pid);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Layout>
      <div className="container">
        <div className="row mt-5">
          {/* <div className="col-md-6"> */}
          <h1 className="text-center mb-4">
            Hello {auth?.token && auth?.user?.name}
          </h1>
          <h4 className="text-center mb-4">
            {cart?.length
              ? `You Have ${cart.length} Items in Your Cart ${
                  auth?.token ? "" : "Please Login to Checkout"
                }`
              : "Your Cart is Empty"}
          </h4>
        </div>
        {/* </div> */}

        {/* <div className="col-md-6"> */}
        {cart?.map((p) => (
          // <div key={p._id} className="card mb-3">
          //   <div className="row g-0">
          //     <div className="col-md-4">
          //       <img
          //         src={`${process.env.REACT_APP_API}/api/v1/product/get-productPhoto/${p._id}`}
          //         className="img-fluid rounded-start"
          //         alt={p.name}
          //       />
          //     </div>
          //     <div className="col-md-8">
          //       <div className="card-body">
          //         <h5 className="card-title">{p.name}</h5>
          //         <p className="card-text">{p.description.substring(0, 30)}</p>
          //         <p className="card-text">Price: {p.price}</p>
          //         <button
          //           className="btn btn-danger"
          //           onClick={() => removeCartItem(p._id)}
          //         >
          //           Remove
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <Card
            imagePath={`/api/v1/product/get-productPhoto/${p._id}`}
            name={p.name}
            description={p.description}
            price={p.price}
            _id={p._id}
            removeCartItem={(_id) => removeCartItem(_id)}
          />
        ))}
        {/* </div> */}
        <div className="col-md-4 text-center">
          <h2 className="mb-4">Cart Summary</h2>
          <p>Total | Checkout | Payment</p>
          <hr />
          <h4>Total : {totalPrice()} </h4>
          {auth?.user?.address ? (
            <>
              <div className="mb-3">
                <h4>Current Address</h4>
                <h5>{auth?.user?.address}</h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            </>
          ) : (
            <div className="mb-3">
              {auth?.token ? (
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    navigate(
                      "/login"
                      // , {
                      //   state: "/cart",
                      // }
                    )
                  }
                >
                  Plase Login to checkout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
