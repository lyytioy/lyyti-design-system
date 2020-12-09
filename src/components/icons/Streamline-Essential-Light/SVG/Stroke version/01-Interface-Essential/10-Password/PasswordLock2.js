import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-lock-2_svg__a"
      d="M10.75 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="password-lock-2_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="password-lock-2_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="password-lock-2_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />,
    <path
      className="password-lock-2_svg__a"
      d="M12.5 15.5h-10a2 2 0 01-2-2v-5a2 2 0 012-2h19a2 2 0 012 2v5"
    />
  );

export default SvgPasswordLock2;
