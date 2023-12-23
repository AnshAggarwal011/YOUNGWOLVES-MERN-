import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credenditals, setcredenditals] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setcredenditals({
      ...credenditals,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credenditals.email,
        password: credenditals.password,
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credenditals.email,
        password: credenditals.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Data");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credenditals.email);
      localStorage.setItem("authToken", JSON.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div
        className="card"
        style={{
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: "black",
            borderBottom: "1px solid #eee",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <h3>YoungWolves</h3>
        </div>
        <div className="card-body" style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="email" style={{ fontWeight: "bold" }}>
                Email
              </label>
              <input
                type="email"
                style={{ width: "100%" }}
                className="form-control"
                id="email"
                name="email"
                value={credenditals.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="password" style={{ fontWeight: "bold" }}>
                Password
              </label>
              <input
                type="password"
                style={{ width: "100%" }}
                className="form-control"
                id="password"
                name="password"
                value={credenditals.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#3897f0",
                border: "none",
                width: "100%",
                padding: "10px",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small>
            Create account?{" "}
            <a
              href="/createuser"
              style={{ color: "#3897f0", fontWeight: "bold" }}
            >
              Sign up
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
