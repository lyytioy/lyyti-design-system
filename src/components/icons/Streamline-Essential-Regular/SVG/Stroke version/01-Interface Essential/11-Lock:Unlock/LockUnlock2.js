import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-unlock-2_svg__a" cx={15} cy={15} r={8.25} />,
    <path
      className="lock-unlock-2_svg__a"
      d="M.75 9.75v-4.5a4.5 4.5 0 019 0v3.385"
    />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 13.5v3"
    />
  );

export default SvgLockUnlock2;
