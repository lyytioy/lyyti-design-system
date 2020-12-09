import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-2_svg__a"
      d="M7 21.5l-6.5 2 2-6.5L15.33 4.169l4.5 4.5L7 21.5z"
    />,
    <path
      className="pencil-2_svg__a"
      d="M15.33 4.169l3.086-3.086a2.007 2.007 0 012.828 0l1.672 1.672a2 2 0 010 2.828L19.83 8.669M17.58 6.419L6 18M2.5 17l1 1H6v2.5l1 1M1.5 20.5l2 2M16.83 2.669l4.5 4.5"
    />
  );

export default SvgPencil2;
