import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLoaded = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-loaded_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-loaded_svg__a"
      d="M6 20.25h12M21 20.25a3 3 0 01-3 3H6a3 3 0 010-6h12a3 3 0 013 3zM18 14.25a4.5 4.5 0 10-3.078-7.781A6.751 6.751 0 108.25 14.25z"
    />
  );

export default SvgCloudLoaded;
