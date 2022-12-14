import React from "react";
import { NavItems, SocialLinks } from "../../assets/data/SideBarData";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <Link to='/' className='personalDetails'>
        <h2>K</h2>
        <h4>Kiran Kumar</h4>
        <p>Frontend Developer</p>
      </Link>
      <div className='navItems'>
        {NavItems.map((items) => (
          <Link className='navLink' to={items.path} key={items.title}>
            {items.title}
          </Link>
        ))}
      </div>
      <div className='navIcons'>
        {SocialLinks.map((icons) => (
          <a
            className='navIcon'
            href={icons.url}
            key={icons.url}
            target='_blank'
            rel='noreferrer'
          >
            {icons.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
