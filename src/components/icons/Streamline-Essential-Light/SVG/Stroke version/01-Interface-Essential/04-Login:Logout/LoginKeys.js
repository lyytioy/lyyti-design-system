import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKeys = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-keys_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="login-keys_svg__a"
      d="M13.5 9a5.5 5.5 0 10-7 5.287V15.5l-1 1 1 1v1l-1 1 1 1V22L8 23.5 9.5 22v-7.713A5.5 5.5 0 0013.5 9z"
    />,
    <circle className="login-keys_svg__a" cx={8} cy={7.498} r={2} />,
    <path
      className="login-keys_svg__a"
      d="M9.5 15.013a5.507 5.507 0 005.425.033L16 16v1.5h1.5l.5.525V19.5h1.317l1.062 1H22.5v-2.121l-5.454-5.454a5.5 5.5 0 00-5.5-8.133"
    />,
    <path className="login-keys_svg__a" d="M8 7V2.5a2 2 0 014 0v2.253" />
  );

export default SvgLoginKeys;
