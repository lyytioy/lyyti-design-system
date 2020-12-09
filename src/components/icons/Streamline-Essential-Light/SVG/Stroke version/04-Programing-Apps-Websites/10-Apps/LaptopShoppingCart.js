import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShoppingCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-shopping-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-shopping-cart_svg__a"
      d="M16.5 7l-1.88 5.171a.5.5 0 01-.47.329h-3.579a.5.5 0 01-.459-.3l-1.072-3a.5.5 0 01.46-.7h6.455M11.25 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M21.306 20.5H2.694a2 2 0 01-1.973-1.667L.5 17.5h23l-.221 1.329a2 2 0 01-1.973 1.671z"
    />,
    <path
      className="laptop-shopping-cart_svg__a"
      d="M2.5 3.5h19a1 1 0 011 1v13h-21v-13a1 1 0 011-1z"
    />
  );

export default SvgLaptopShoppingCart;
