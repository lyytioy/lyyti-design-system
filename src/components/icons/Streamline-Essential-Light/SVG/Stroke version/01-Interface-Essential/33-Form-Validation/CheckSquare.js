import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="check-square_svg__a" d="M21.5 1.999L9 17.499l-5-5" />,
    <path
      className="check-square_svg__a"
      d="M18.5 12v10.5a1 1 0 01-1 1h-16a1 1 0 01-1-1v-16a1 1 0 011-1H13"
    />
  );

export default SvgCheckSquare;
