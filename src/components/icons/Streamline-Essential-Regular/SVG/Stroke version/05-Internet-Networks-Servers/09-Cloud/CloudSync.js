import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733"
    />,
    <path
      className="cloud-sync_svg__a"
      d="M22.877 9a4.869 4.869 0 00-7.266-2.135A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudSync;
