import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForbiddenPhoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".forbidden-phone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="forbidden-phone-off_svg__a"
      d="M9.75 18.75H18M15 2.25H9a3 3 0 00-3 3v9M18 10.5v9.75a3 3 0 01-3 3H9a2.994 2.994 0 01-2.257-1.023M23.25.75L.75 23.25"
    />
  );

export default SvgForbiddenPhoneOff;
