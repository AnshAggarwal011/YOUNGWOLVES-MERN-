import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let navigate = useNavigate();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState();
  const priceRef = useRef();

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = async () => {
    let hoodie = [];
    for (const item of data) {
      if (item.id === props.hoodiesitems._id) {
        hoodie = item;

        break;
      }
    }
    console.log(hoodie);
    console.log(new Date());
    if (hoodie !== []) {
      if (hoodie.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.hoodiesitems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (hoodie.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.hoodiesitems._id,
          name: props.hoodiesitems.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.hoodiesitems.img,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.hoodiesitems._id,
      name: props.hoodiesitems.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  let finalPrice = qty * parseInt(options[size]);
  return (
    <div>
      <div>
        <div
          className="card mt-0 m-3 bg-black"
          style={{ width: "18rem", minHeight: "550px" }}
        >
          <img
            src={props.hoodiesitems.img}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "300px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ minHeight: "20px" }}>
              {props.hoodiesitems.name}
            </h5>
            <p className="card-text" style={{ minHeight: "120px" }}>
              {props.hoodiesitems.description}
            </p>
            <div className="container w-100 mt-auto">
              <select
                className="m-2 h-100  rounded bg-white text-black"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 rounded bg-white text-black"
                style={{ select: "#FF0000" }}
                ref={priceRef}
                onClick={handleClick}
                onChange={handleOptions}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline w-100  fs-5">{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              className={"btn btn-success justify-center ms-2"}
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
