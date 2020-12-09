import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="focus_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <circle className="focus_svg__a" cx={12} cy={12} r={3.75} />,
    <path
      className="focus_svg__a"
      d="M17.651 18a8.225 8.225 0 000-12M6.349 6a8.225 8.225 0 000 12"
    />
  );

export default SvgFocus;
