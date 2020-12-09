import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-lock-1_svg__a"
      d="M10.5 13.5h-9a1 1 0 01-1-1v-7a1 1 0 011-1h21a1 1 0 011 1v5.021M4.5 7v4M6.173 7.903l-3.345 2.194M6.164 10.11L2.836 7.89M10.5 7v4M12.173 7.903l-3.345 2.194M12.164 10.11L8.836 7.89"
    />,
    <rect
      className="password-lock-1_svg__a"
      x={13.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="password-lock-1_svg__a" cx={18} cy={19.563} r={1.25} />,
    <path
      className="password-lock-1_svg__a"
      d="M20.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgPasswordLock1;
