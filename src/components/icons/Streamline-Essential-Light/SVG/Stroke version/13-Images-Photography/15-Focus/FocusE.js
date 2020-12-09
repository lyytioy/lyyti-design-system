import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusE = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-e_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="focus-e_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={21}
      rx={2}
      ry={2}
    />,
    <path
      className="focus-e_svg__a"
      d="M13 13.5a1.5 1.5 0 000-3h-2.5v-2a1 1 0 011-1H15a1.5 1.5 0 000-3h-3.5a4 4 0 00-4 4v7a4 4 0 004 4H15a1.5 1.5 0 000-3h-3.5a1 1 0 01-1-1v-2z"
    />
  );

export default SvgFocusE;
