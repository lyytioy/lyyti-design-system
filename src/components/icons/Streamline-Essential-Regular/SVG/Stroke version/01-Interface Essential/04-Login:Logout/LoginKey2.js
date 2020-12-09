import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKey2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-key-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-key-2_svg__a"
      d="M8.25 18v3.1a1.518 1.518 0 001.5 1.4h12a1.557 1.557 0 001.5-1.607V3.111a1.556 1.556 0 00-1.5-1.611h-12a1.62 1.62 0 00-1.5 1.808V6"
    />,
    <path
      className="login-key-2_svg__a"
      d="M6.75 12.004h12v3M15.75 15.004v-3"
    />,
    <circle className="login-key-2_svg__a" cx={3.75} cy={12.004} r={3} />
  );

export default SvgLoginKey2;
