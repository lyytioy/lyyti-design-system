import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="lock-circle_svg__a"
      x={6.75}
      y={9.75}
      width={10.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-circle_svg__a"
      d="M8.25 9.75V7.5a3.75 3.75 0 017.5 0v2.25"
    />,
    <circle className="lock-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 12.75v3"
    />
  );

export default SvgLockCircle;
