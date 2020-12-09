import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-4_svg__a" cx={12} cy={16} r={7.5} />,
    <path
      className="lock-4_svg__a"
      d="M17.5 10.907V6a5.5 5.5 0 00-11 0v4.907"
    />,
    <circle className="lock-4_svg__a" cx={12} cy={16} r={1} />,
    <path className="lock-4_svg__a" d="M12 17v3" />
  );

export default SvgLock4;
