import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPen1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-1_svg__a"
      d="M7.571 20.672a1.5 1.5 0 01-2.121 0L3.328 18.55a1.5 1.5 0 010-2.121l15.051-15.05a3 3 0 014.242 4.242zM18.348 1.409l-.323-.323a2 2 0 00-2.828 0l-3.889 3.889M14.136 5.621l4.243 4.243M1.207 19.257l3.536 3.536M2.975 21.025L.5 23.5"
    />
  );

export default SvgContentPen1;
