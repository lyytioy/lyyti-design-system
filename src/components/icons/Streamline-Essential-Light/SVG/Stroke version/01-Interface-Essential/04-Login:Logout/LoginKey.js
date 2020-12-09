import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="login-key_svg__a" cx={5.5} cy={18.5} r={1.5} />,
    <path
      className="login-key_svg__a"
      d="M20.5.5l-9.782 9.783a7 7 0 103 3L17 10h1.5V8.5L19 8h1.5V6.5L21 6h1.5V4.5l1-1v-3z"
    />
  );

export default SvgLoginKey;
