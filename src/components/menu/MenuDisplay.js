import React from "react";
import { ClickAwayListener } from "@material-ui/core";

export default function MenuDisplay() {
  const [showMenu, setShowMenu] = React.useState("start-open-menu-container");

  const handleClick = () => {
    if (showMenu === "closed-menu-container")
      setShowMenu("open-menu-container");
  };

  return (
    <ClickAwayListener onClickAway={() => setShowMenu("closed-menu-container")}>
      <div className={showMenu} onClick={handleClick}>
        <h3>Menu</h3>
      </div>
    </ClickAwayListener>
  );
}
