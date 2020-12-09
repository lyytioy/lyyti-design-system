import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-cart_svg__a"
      d="M14.591 15v5.518a2.733 2.733 0 01-2.733 2.732H5.323a2.732 2.732 0 01-2.732-2.732V4.983A2.733 2.733 0 015.323 2.25h1.768M2.591 18.75h12M21.409.75l-2.82 7.757a.751.751 0 01-.7.493h-5.373a.75.75 0 01-.689-.454l-1.607-4.5A.75.75 0 0110.909 3h9.682M13.534 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.284 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionCart;
