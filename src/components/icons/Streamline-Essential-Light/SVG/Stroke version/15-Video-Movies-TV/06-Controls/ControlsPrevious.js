import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-previous_svg__a"
      d="M23.5 21.28a1 1 0 01-1.663.749l-10.49-9.28a1 1 0 010-1.5l10.49-9.28a1 1 0 011.663.751z"
    />,
    <rect
      className="controls-previous_svg__a"
      x={0.5}
      y={0.5}
      width={6}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgControlsPrevious;
