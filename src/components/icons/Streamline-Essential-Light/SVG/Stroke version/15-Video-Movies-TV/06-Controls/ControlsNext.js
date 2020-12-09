import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-next_svg__a"
      d="M.5 2.72a1 1 0 011.663-.749l10.49 9.28a1 1 0 010 1.5l-10.49 9.28A1 1 0 01.5 21.28z"
    />,
    <rect
      className="controls-next_svg__a"
      x={17.5}
      y={0.5}
      width={6}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgControlsNext;
