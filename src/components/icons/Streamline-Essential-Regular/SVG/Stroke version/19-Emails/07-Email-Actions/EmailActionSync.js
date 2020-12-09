import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-sync_svg__a"
      d="M14.25 5.25H18V1.5M17.25 5.25a5.313 5.313 0 00-10.5 0M10.5 8.25H6.75V12M7.5 8.25a5.312 5.312 0 0010.5 0"
    />,
    <path
      className="email-action-sync_svg__a"
      d="M20.625 9.75h1.125a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5h1.5"
    />,
    <path
      className="email-action-sync_svg__a"
      d="M23.25 12l-9.85 5.628a2.824 2.824 0 01-2.8 0L.75 12"
    />
  );

export default SvgEmailActionSync;
