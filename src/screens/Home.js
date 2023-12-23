import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [Search, setSearch] = useState("");
  const [hoodiecat, sethoodiecat] = useState([]);
  const [hoodiesitems, sethoodiesitems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/hoodiesData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    sethoodiesitems(response[0]);
    sethoodiecat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ objectFit: "contain" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption " style={{ zIndex: 10 }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2 bg-white"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={Search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  {/* <button
                    className="btn btn-outline-primary text-white bg-primary "
                    type="submit"
                  >
                    Search
                  </button> */}
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://drive.google.com/uc?id=1gQ9tsr-B5RoaGozzLXew61VzfCax7LVb"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://drive.google.com/uc?id=1P_rLEL3jKvEhotwGAR4Y38ey-WPajfSi"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://drive.google.com/uc?id=1sYMtdP4JftXzuhQ1uqufVPF0k7EjZ_TT"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://drive.google.com/uc?id=18J083RbOizWoiEFhaoTBpz6u9pIG2dX7"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {hoodiecat !== [] ? (
          hoodiecat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr className="bg-black" />
                {hoodiesitems !== [] ? (
                  hoodiesitems
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes(Search.toLocaleLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-4 "
                        >
                          <Card
                            hoodiesitems={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>""""""</div>
                )}
              </div>
            );
          })
        ) : (
          <div>"""""""""""""</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
