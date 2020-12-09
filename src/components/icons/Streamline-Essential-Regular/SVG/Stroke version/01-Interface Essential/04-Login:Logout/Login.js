import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login_svg__a"
      d="M23.25 12.004H7.5M11.25 15.754l-3.75-3.75 3.75-3.75M20.693 16.6a10.5 10.5 0 11-.179-9.542"
    />
  );

export default SvgLogin;
