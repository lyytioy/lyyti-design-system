import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5M3.75 6.75h10.5M3.75 11.25H7.5M3.75 15.75H7.5"
    />,
    <path
      className="common-file-text-shield_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V7.5"
    />
  );

export default SvgCommonFileTextShield;
