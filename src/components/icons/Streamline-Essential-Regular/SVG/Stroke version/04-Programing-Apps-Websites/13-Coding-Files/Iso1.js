import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIso1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iso-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="iso-1_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="iso-1_svg__a"
      d="M6 18.004v-7.5M12 10.5h-1.5A1.5 1.5 0 009 12c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5H9M16.5 10.5A1.5 1.5 0 0015 12v4.5a1.5 1.5 0 103 0V12a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgIso1;
