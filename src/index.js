import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import cornImg from "./pizzas/Corn.jpg";
import fresh from "./pizzas/fresh.JPG";
import toasedBread from "./pizzas/ToastedBread.jpg";
import spinachPizza from "./pizzas/spinach.jpg";
import oniPizza from "./pizzas/onion.jpg";
import evePizza from "./pizzas/evergreen.jpg";

export const pizzaData = [
  {
    name: "Garden Fresh",
    ingredients: "Lots of mouth watering fresh veggies",
    price: 199,
    photoName: fresh,
    soldOut: false,
  },
  {
    name: "Toasted Bread",
    ingredients: "Toasted bread with veggies and cheese for a great start",
    price: 99,
    photoName: toasedBread,
    soldOut: false,
  },
  {
    name: "Pizza Spinach",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 159,
    photoName: spinachPizza,
    soldOut: false,
  },
  {
    name: "Corn & Onion",
    ingredients: "A twist of a bit of sweet with corns",
    price: 129,
    photoName: oniPizza,
    soldOut: false,
  },
  {
    name: "Pizza Evergreen",
    ingredients: "Looks fresh and green pizza",
    price: 249,
    photoName: evePizza,
    soldOut: true,
  },
  {
    name: "Sweet and Salty",
    ingredients: "With onions and tomatoes and tangy masala with cheese on top",
    price: 199,
    photoName: cornImg,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);
