import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-1_svg__a"
      d="M.75.75v22.5M14.25 15.75H.75V2.25h12a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="flag-plain-1_svg__a"
      d="M14.25 6.75h8.156a.8.8 0 01.844.75v12a.8.8 0 01-.844.75H9a1.5 1.5 0 01-1.5-1.5v-3M9.75 20.25a4.5 4.5 0 014.5-4.5"
    />
  );

export default SvgFlagPlain1;
