import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKey1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-key-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="login-key-1_svg__a" cx={6} cy={18} r={2.5} />,
    <path
      className="login-key-1_svg__a"
      d="M22 9l1.5-1.5L21 5l1.5-1.5a1.414 1.414 0 00-2-2L8.755 13.245a5.512 5.512 0 102 2L16.5 9.5l2 2L20 10l-2-2 1.5-1.5z"
    />
  );

export default SvgLoginKey1;
