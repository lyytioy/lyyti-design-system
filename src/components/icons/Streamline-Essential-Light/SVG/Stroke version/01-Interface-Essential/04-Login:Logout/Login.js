import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="login_svg__a"
      d="M22.586 7.5a11.5 11.5 0 100 9M11.5 8l-4 4 4 4M7.5 12h16"
    />
  );

export default SvgLogin;
