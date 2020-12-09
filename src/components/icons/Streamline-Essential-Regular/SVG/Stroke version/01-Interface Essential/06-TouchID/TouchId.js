import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id_svg__a"
      d="M3 14.25v9M16.478 2.144A8.311 8.311 0 0011.888.75C7.37.75 3.613 4.453 3.072 9.2M21 23.25V10.375A10.187 10.187 0 0020.023 6"
    />,
    <path
      className="touch-id_svg__a"
      d="M18 15.75v-4.5c0-3.713-2.7-6.75-6-6.75s-6 3.037-6 6.75v12M18 23.25v-4.5M9 17.25v6"
    />,
    <path
      className="touch-id_svg__a"
      d="M15 23.25V12c0-2.063-1.35-3.75-3-3.75S9 9.937 9 12v2.25M12 20.25v3M12 11.25v6"
    />
  );

export default SvgTouchId;
