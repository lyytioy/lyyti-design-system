import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileApp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-app_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-app_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-app_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M5.5 18.5V14a1.5 1.5 0 113 0v4.5M5.5 15.504h3M13.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H12a1.5 1.5 0 011.5 1.5zM10.5 18.504v-3M18.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H17a1.5 1.5 0 011.5 1.5zM15.5 18.504v-3"
    />
  );

export default SvgFileApp;
