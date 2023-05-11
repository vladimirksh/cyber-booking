import React from "react";
import Logo from "../Logo/Logo";
import AuthMenu from "../AuthMenu/AuthMenu";
import SiteMenu from "../SiteMenu/SiteMenu";

function Header(props) {
  return (
    <header className="header">
      <nav className="header__client-nav">
        <Logo />
        <AuthMenu />
      </nav>
      <nav className="header__site-nav">
        <SiteMenu />
      </nav>
    </header>
  );
}

export default Header;
