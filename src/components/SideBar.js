import React from "react";
import { Link, Outlet} from "react-router-dom";
import { AiOutlineHome, AiOutlineStock, AiOutlineHistory, AiOutlineWallet, AiOutlinePhone, AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import "../App.css";

export const SideBar = () => {
  return (
    <div>
      <nav>
        <Link to={`/`} className="logo btn btn1 btn-secondary">
          DPA
        </Link>
      </nav>
      <nav class="sidebar">
        <Link to="/" ><AiOutlineHome /> HOME</Link>
        <Link to="/marketplace" className="active"><AiOutlineStock /> MARKETPLACE</Link>
        <Link to="/ito"><AiOutlineBarChart /> ITO</Link>
        <Link to="/transaction"><AiOutlineHistory /> TRANSACTIONS</Link>
        <Link to="/wallet"><AiOutlineWallet /> WALLET</Link>
        <Link to="/profile"><CgProfile /> PROFILE</Link>
        <Link to="/contact"><AiOutlinePhone /> CONTACT</Link>
        <Link to="/help"><BiHelpCircle /> Help</Link>
        <Outlet />
      </nav>
    </div>
  );
};
