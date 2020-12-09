import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShade = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shade_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lens-shade_svg__a"
      d="M4.419.5a1 1 0 00-.942 1.336l1.786 5a1 1 0 00.942.664H17.8a1 1 0 00.942-.664l1.786-5A1 1 0 0019.581.5z"
    />,
    <path
      className="lens-shade_svg__a"
      d="M7.5 7.5h9v4h-9zM8.5 21.5v1a1 1 0 001 1h5a1 1 0 001-1v-1zM7.5 13.5v5M10.5 13.5v5M13.5 13.5v5M16.5 13.5v5"
    />,
    <rect
      className="lens-shade_svg__a"
      x={5.5}
      y={11.5}
      width={13}
      height={10}
      rx={1}
      ry={1}
    />
  );

export default SvgLensShade;
