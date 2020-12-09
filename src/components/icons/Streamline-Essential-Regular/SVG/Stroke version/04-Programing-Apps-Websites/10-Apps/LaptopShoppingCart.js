import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShoppingCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-shopping-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-shopping-cart_svg__a"
      d="M22.371 19.978a1.226 1.226 0 01-1.1 1.775H2.727a1.225 1.225 0 01-1.1-1.775L3 15.749h18z"
    />,
    <path
      className="laptop-shopping-cart_svg__a"
      d="M19.5 3.753a1.5 1.5 0 011.5 1.5v10.5H3.006v-10.5a1.5 1.5 0 011.5-1.5M11.25 18.751h1.5"
    />,
    <path
      className="laptop-shopping-cart_svg__a"
      d="M13.919 9.753H9v-4.5h7.5l-1.158 3.475a1.5 1.5 0 01-1.423 1.025zM9 5.253v-2.25l-1.5-.75M9.75 12a.375.375 0 11-.375.375A.375.375 0 019.75 12M14.25 12a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgLaptopShoppingCart;
