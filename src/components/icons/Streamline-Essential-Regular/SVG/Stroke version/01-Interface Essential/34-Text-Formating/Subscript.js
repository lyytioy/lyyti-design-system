import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubscript = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subscript_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="subscript_svg__a"
      d="M.75.748l15.75 15.75M16.5.748L.75 16.498M20.25 18.748a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 2.138 2.138 0 01-.468 1.335l-2.532 3.165h3"
    />
  );

export default SvgSubscript;
