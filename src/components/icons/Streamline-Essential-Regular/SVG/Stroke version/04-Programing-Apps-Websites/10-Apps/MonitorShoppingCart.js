import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShoppingCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-shopping-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-shopping-cart_svg__a"
      d="M8.25 21.753h7.5M12 18.753v3M.75 15.003h22.5M20.25.753h1.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h1.5"
    />,
    <path
      className="monitor-shopping-cart_svg__a"
      d="M17.25 1.503L15 9.003H9l-1.5-4.5h8.85M9.375 11.253a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.625 11.253a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgMonitorShoppingCart;
