import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-approved_svg__a"
      d="M9 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6M23.25 17.25a6 6 0 11-6-6"
    />,
    <path
      className="password-approved_svg__a"
      d="M23.25 12.749l-5.47 5.47a.749.749 0 01-1.06 0L15 16.5M5.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M11.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M17.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />
  );

export default SvgPasswordApproved;
