import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".logout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="logout_svg__a"
      d="M.75 12.004H16.5M12.75 15.754l3.75-3.75-3.75-3.75M3.306 16.6a10.5 10.5 0 10.179-9.542"
    />
  );

export default SvgLogout;
