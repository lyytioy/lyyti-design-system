import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWindowMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-window-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="composition-window-man_svg__a"
      cx={12}
      cy={9.375}
      r={2.625}
    />,
    <path
      className="composition-window-man_svg__a"
      d="M7.5 17.25a4.5 4.5 0 019 0z"
    />,
    <rect
      className="composition-window-man_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={16.5}
      rx={3}
      ry={3}
    />
  );

export default SvgCompositionWindowMan;
