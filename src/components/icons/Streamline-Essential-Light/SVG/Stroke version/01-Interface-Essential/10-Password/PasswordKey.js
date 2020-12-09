import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-key_svg__a"
      d="M9.5 19.5h-7a2 2 0 01-2-2v-15a2 2 0 012-2h19a2 2 0 012 2v7M.5 5.5h23"
    />,
    <path
      className="password-key_svg__a"
      d="M4 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M11 14.5H4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h14.5M16.405 20.231a1.25 1.25 0 110-1.768 1.251 1.251 0 010 1.768z"
    />,
    <path
      className="password-key_svg__a"
      d="M19.048 17.942L23.5 13.5v-2h-2l-4.574 4.321a4 4 0 102.122 2.121z"
    />
  );

export default SvgPasswordKey;
