import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-next_svg__a"
      d="M.75 3.629v16.742a.75.75 0 001.175.618L14.1 12.618a.749.749 0 000-1.236L1.925 3.011a.75.75 0 00-1.175.618z"
    />,
    <rect
      className="controls-next_svg__a"
      x={18.75}
      y={2.25}
      width={4.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgControlsNext;
