import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-flash_svg__a"
      d="M19.385 15.646a4.875 4.875 0 10-3.775-8.781 7.5 7.5 0 10-10.484 8.206"
    />,
    <path
      className="cloud-flash_svg__a"
      d="M16.388 16.144A.75.75 0 0015.749 15h-1.5V9.751l-6.2 7.107A.75.75 0 008.684 18h2.565v5.25z"
    />
  );

export default SvgCloudFlash;
