import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="lock-8_svg__a"
      d="M20.25 20.25a3 3 0 01-3 3h-12a3 3 0 01-3-3v-9a3 3 0 013-3h12a3 3 0 013 3M6.75 8.25v-3a4.5 4.5 0 019 0v3M15.75 14.25h6M15.75 17.25h6"
    />
  );

export default SvgLock8;
