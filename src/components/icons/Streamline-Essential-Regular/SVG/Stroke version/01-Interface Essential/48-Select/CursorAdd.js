import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-add_svg__a"
      d="M.75.747l3.182 8.486L5.523 5.52l3.712-1.591L.75.747z"
    />,
    <circle className="cursor-add_svg__a" cx={15.75} cy={15.747} r={7.5} />,
    <path className="cursor-add_svg__a" d="M15.75 11.997v7.5M12 15.747h7.5" />
  );

export default SvgCursorAdd;
