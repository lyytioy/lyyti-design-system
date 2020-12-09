import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="check-button_svg__a"
      x={0.75}
      y={5.249}
      width={22.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="check-button_svg__a" d="M20.25 8.999l-3.75 5.25-3-3" />
  );

export default SvgCheckButton;
