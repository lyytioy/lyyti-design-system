import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComposition16To9 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-16-to-9_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="composition-16-to-9_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={13.5}
      rx={3}
      ry={3}
    />,
    <path
      className="composition-16-to-9_svg__a"
      d="M14.25 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.5 8.25a2.25 2.25 0 00-2.25 2.25v2.25"
    />,
    <circle
      className="composition-16-to-9_svg__a"
      cx={9.75}
      cy={12.75}
      r={1.5}
    />,
    <path
      className="composition-16-to-9_svg__a"
      d="M3.75 8.25h.75a.75.75 0 01.75.75v5.25M3.75 14.25h3M20.25 9.75V12A2.25 2.25 0 0118 14.25"
    />,
    <circle
      className="composition-16-to-9_svg__a"
      cx={18.75}
      cy={9.75}
      r={1.5}
    />
  );

export default SvgComposition16To9;
