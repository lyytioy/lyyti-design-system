import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForbiddenPhoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".forbidden-phone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="forbidden-phone-off_svg__a"
      d="M6.5 14.458V5A1.5 1.5 0 018 3.5h8.479M17.5 9.521V19a1.5 1.5 0 01-1.5 1.5H7.5M6.5 7.5h6.984M9.5 17.5h8M10.5 5.5h3M.5 23.5l23-23"
    />
  );

export default SvgForbiddenPhoneOff;
