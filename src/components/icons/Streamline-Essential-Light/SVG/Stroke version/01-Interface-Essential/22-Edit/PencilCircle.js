import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-circle_svg__a"
      d="M10.661 16.168l-4.95 2.122 2.122-4.951L16.672 4.5 19.5 7.329l-8.839 8.839zM17.664 9.165l-2.828-2.829M10.661 16.168l-2.828-2.829"
    />,
    <circle className="pencil-circle_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgPencilCircle;
