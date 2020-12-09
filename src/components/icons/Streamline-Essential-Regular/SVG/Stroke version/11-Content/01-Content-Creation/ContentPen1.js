import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPen1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-1_svg__a"
      d="M7.969 20.277a1.5 1.5 0 01-2.125 0l-2.125-2.125a1.5 1.5 0 010-2.125l14.4-14.4a3 3 0 114.249 4.25z"
    />,
    <path
      className="content-pen-1_svg__a"
      d="M18.117 1.63a3.006 3.006 0 00-4.25 0l-3.242 3.242M12.75 6.997L17 11.246M3.719 22.402l-2.124-2.125M2.657 21.34l-1.91 1.91"
    />
  );

export default SvgContentPen1;
