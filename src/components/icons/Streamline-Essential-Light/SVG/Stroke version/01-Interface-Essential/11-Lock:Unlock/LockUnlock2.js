import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-unlock-2_svg__a" cx={12} cy={16} r={7.5} />,
    <path
      className="lock-unlock-2_svg__a"
      d="M17.5 10.917V5.5a5 5 0 00-10 0"
    />,
    <circle className="lock-unlock-2_svg__a" cx={12} cy={16} r={1} />,
    <path className="lock-unlock-2_svg__a" d="M12 17v3" />
  );

export default SvgLockUnlock2;
