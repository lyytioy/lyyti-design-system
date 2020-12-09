import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".key-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="key-lock_svg__a" cx={3.75} cy={20.25} r={3} />,
    <path
      className="key-lock_svg__a"
      d="M6.75 20.25h7.5v2.25M11.25 20.25v1.5"
    />,
    <path
      className="key-lock_svg__a"
      d="M6.75 15v-3.75a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-4.5M9.75 9.75V6a5.25 5.25 0 0110.5 0v3.75M15 14.25v3"
    />
  );

export default SvgKeyLock;
