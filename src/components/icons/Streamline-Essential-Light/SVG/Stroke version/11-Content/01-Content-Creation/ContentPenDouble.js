import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPenDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-double_svg__a"
      d="M18.257 21.753c.965.966 5.243 1.747 5.243 1.747s-.783-4.277-1.748-5.242a2.471 2.471 0 10-3.495 3.5zM20.671 20.672L23.5 23.5M10.233 7.404L8.985 6.156 6.157 8.985l1.248 1.247"
    />,
    <path
      className="content-pen-double_svg__a"
      d="M13.767 16.597l3.074 3.073 2.828-2.828-3.073-3.074M4.036 1.208a2 2 0 012.828 0L11.655 6"
    />,
    <path
      className="content-pen-double_svg__a"
      d="M.5 3.327L3.33.499l5.655 5.658-2.829 2.828zM2.268 18.197l12.04-12.042 3.536 3.536-12.04 12.041zM22.794 4.742a2 2 0 010 2.829L18.77 11.6"
    />,
    <path
      className="content-pen-double_svg__a"
      d="M14.308 6.156L19.966.5 23.5 4.035l-5.657 5.656zM.5 23.5l5.303-1.768-3.535-3.535L.5 23.5z"
    />
  );

export default SvgContentPenDouble;
