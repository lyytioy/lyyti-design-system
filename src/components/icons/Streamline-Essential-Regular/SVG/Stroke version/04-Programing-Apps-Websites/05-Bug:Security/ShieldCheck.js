import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-check_svg__a"
      d="M23.25 9.938A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.938V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM.75 5.25h22.5"
    />,
    <path
      className="shield-check_svg__a"
      d="M17.25 9.749l-5.47 5.47a.749.749 0 01-1.06 0L9 13.5"
    />
  );

export default SvgShieldCheck;
