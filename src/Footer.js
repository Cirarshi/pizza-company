import React from "react";
import { Order } from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = "18";
  const closeHour = "23";
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We're are closed Now !!. Wait until {openHour}:00p.m.</p>
      )}
    </footer>
  );
}
