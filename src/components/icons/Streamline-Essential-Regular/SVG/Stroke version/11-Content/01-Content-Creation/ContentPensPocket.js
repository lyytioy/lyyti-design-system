import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPensPocket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pens-pocket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pens-pocket_svg__a"
      d="M17.133 2.261h1.628a1.5 1.5 0 011.5 1.5v6M5.261 5.261h4.5v7.5h-4.5zM7.511.761a2.25 2.25 0 012.25 2.25v2.25h-4.5v-2.25a2.25 2.25 0 012.25-2.25z"
    />,
    <path
      className="content-pens-pocket_svg__a"
      d="M15.011.761a2.25 2.25 0 00-2.25 2.25v9.75h4.5v-9.75a2.25 2.25 0 00-2.25-2.25zM12.761 6.761h4.5M.761 23.261v-9a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v9"
    />
  );

export default SvgContentPensPocket;
