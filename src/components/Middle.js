import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Help } from "../pages/Help";
import { Home } from "../pages/Home";
import { Ito } from "../pages/Ito";
import { Marketplace } from "../pages/Marketplace";
import { Profile } from "../pages/Profile";
import { Transaction } from "../pages/Transaction";
import { Wallet } from "../pages/Wallet";

export const Middle = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/ito" element={<Ito />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
  );
};
