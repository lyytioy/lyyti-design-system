import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsEject = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-eject_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-eject_svg__a"
      d="M2.72 13.241a1 1 0 01-.749-1.662l9.28-10.491a1 1 0 011.5 0l9.28 10.491a1 1 0 01-.749 1.662z"
    />,
    <rect
      className="controls-eject_svg__a"
      x={0.5}
      y={18.25}
      width={23}
      height={5}
      rx={1}
      ry={1}
    />
  );

export default SvgControlsEject;
