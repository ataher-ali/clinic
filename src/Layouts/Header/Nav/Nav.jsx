import React from 'react';
import NavPageLink from '../Components/NavPageLink';

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <NavPageLink></NavPageLink>
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Nav;