import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="password-key_svg__a" cx={14.236} cy={19.744} r={3} />,
    <path
      className="password-key_svg__a"
      d="M16.357 17.622l5.303-5.303 1.591 1.591M19.539 14.44l1.061 1.061M23.251 9.244v-6.75a1.5 1.5 0 00-1.5-1.5h-19.5a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5H7.5M.751 5.494h22.5"
    />
  );

export default SvgPasswordKey;
