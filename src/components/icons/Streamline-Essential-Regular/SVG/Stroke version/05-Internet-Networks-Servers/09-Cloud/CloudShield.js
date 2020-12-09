import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-shield_svg__a"
      d="M22.479 8.242a4.867 4.867 0 00-6.868-1.377A7.5 7.5 0 108.25 15.75"
    />,
    <path
      className="cloud-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5"
    />
  );

export default SvgCloudShield;
