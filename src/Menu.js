import React from "react";
import { pizzaData } from ".";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;

  return (
    <main className="menu">
      <h2>You can choose from</h2>

      {pizzasNum > 0 ? (
        <React.Fragment>
          <p>
            Real authentic italian pizza taste is here, which you can get
            no-where.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're upgrading our menu, please wait.</p>
      )}
    </main>
  );
}
