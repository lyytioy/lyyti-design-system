import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-3_svg__a{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-unlock-3_svg__a" cx={15} cy={15} r={8.25} />,
    <circle
      cx={15}
      cy={15}
      r={2.25}
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />,
    <path
      className="lock-unlock-3_svg__a"
      d="M.75 9.75v-4.5a4.5 4.5 0 019 0v3.385"
    />
  );

export default SvgLockUnlock3;
