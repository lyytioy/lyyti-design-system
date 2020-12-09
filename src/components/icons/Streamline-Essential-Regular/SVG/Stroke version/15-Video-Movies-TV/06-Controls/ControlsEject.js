import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsEject = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-eject_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-eject_svg__a"
      d="M11.4 1.779l-9.75 12.1A.7.7 0 002.251 15h19.5a.7.7 0 00.6-1.117L12.6 1.779a.785.785 0 00-1.2 0z"
    />,
    <rect
      className="controls-eject_svg__a"
      x={0.75}
      y={18}
      width={22.5}
      height={4.5}
      rx={1}
      ry={1}
    />
  );

export default SvgControlsEject;
