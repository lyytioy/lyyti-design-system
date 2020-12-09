import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="delete-1_svg__a" cx={11.998} cy={12} r={11.25} />,
    <path
      className="delete-1_svg__a"
      d="M7.498 16.5l8.999-9M16.498 16.5l-9.001-9"
    />
  );

export default SvgDelete1;
