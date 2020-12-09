import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKey2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-key-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="login-key-2_svg__a"
      d="M6 6.5a5.5 5.5 0 105.287 7H12.5l1 1 1-1h1l1 1 1-1H19l1.5-1.5-1.5-1.5h-7.713A5.5 5.5 0 006 6.5z"
    />,
    <circle className="login-key-2_svg__a" cx={4} cy={12.002} r={1.5} />,
    <path
      className="login-key-2_svg__a"
      d="M10.5 19.522V22.5a1 1 0 001 1h11a1 1 0 001-1v-21a1 1 0 00-1-1h-11a1 1 0 00-1 1v4"
    />
  );

export default SvgLoginKey2;
