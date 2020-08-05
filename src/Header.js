import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists,Songs" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.image?.url} alt="VS" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
