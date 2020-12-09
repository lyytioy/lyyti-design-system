import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginKeys = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-keys_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-keys_svg__a"
      d="M12.75 9.807a6 6 0 10-7.5 5.811v6.136a1.5 1.5 0 003 0v-6.136a6 6 0 004.5-5.811z"
    />,
    <path
      className="login-keys_svg__a"
      d="M13.563 15.75a5.972 5.972 0 002.219-.773l4.907 4.906a1.5 1.5 0 002.121-2.121l-4.91-4.906a6 6 0 00-8.159-8.251"
    />,
    <circle className="login-keys_svg__a" cx={6.75} cy={9.057} r={1.5} />,
    <path
      className="login-keys_svg__a"
      d="M6.75 7.557V3a2.25 2.25 0 014.5 0v.989"
    />
  );

export default SvgLoginKeys;
