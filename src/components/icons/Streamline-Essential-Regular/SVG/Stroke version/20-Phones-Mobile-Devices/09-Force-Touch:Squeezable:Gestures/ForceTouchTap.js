import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-tap_svg__a"
      d="M12 2.25l-6.389 8.024a1.5 1.5 0 102.277 1.952l5.362-6.009a1.966 1.966 0 012.244-.345 1.964 1.964 0 01.878 2.635l-.341.5a1.582 1.582 0 00.6 2.312 1.583 1.583 0 002.1-.665l4.522-8.4M21.75 17.25H2.25a1.5 1.5 0 00-1.5 1.5 3 3 0 003 3h16.5a3 3 0 003-3 1.5 1.5 0 00-1.5-1.5zM15.75 17.25v4.5M.75 14.25H3M3 10.5L1.5 9M12.75 14.25H10.5"
    />
  );

export default SvgForceTouchTap;
