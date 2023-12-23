import React, { useState } from "react";

export default function Signup() {
  const [credenditals, setcredenditals] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

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
        name: credenditals.name,
        email: credenditals.email,
        password: credenditals.password,
        location: credenditals.geolocation,
      })
    );
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credenditals.name,
        email: credenditals.email,
        password: credenditals.password,
        location: credenditals.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Data");
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
              <label htmlFor="username" style={{ fontWeight: "bold" }}>
                Username
              </label>
              <input
                type="text"
                style={{ width: "100%" }}
                className="form-control"
                id="username"
                name="name"
                value={credenditals.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label htmlFor="Address" style={{ fontWeight: "bold" }}>
                Address
              </label>
              <input
                type="text"
                style={{ width: "100%" }}
                className="form-control"
                id="Address"
                name="geolocation"
                value={credenditals.geolocation}
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
              Sign Up
            </button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small>
            Have an account?{" "}
            <a href="/login" style={{ color: "#3897f0", fontWeight: "bold" }}>
              Log in
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
