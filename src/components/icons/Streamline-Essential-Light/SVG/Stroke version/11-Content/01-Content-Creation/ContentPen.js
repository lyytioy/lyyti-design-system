import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pen_svg__a"
      d="M10.046 18.2a1.5 1.5 0 01-2.121 0L5.8 16.075a1.5 1.5 0 010-2.121L18.379 1.379a3 3 0 014.242 4.242zM18.348 1.409l-.323-.323a2 2 0 00-2.828 0l-3.889 3.889"
    />,
    <path
      className="content-pen_svg__a"
      d="M6.864 21.379C5.692 22.55.5 23.5.5 23.5s.95-5.192 2.121-6.364a3 3 0 014.243 4.243zM.5 23.5l3.182-3.182M14.843 4.914l4.243 4.243"
    />
  );

export default SvgContentPen;
