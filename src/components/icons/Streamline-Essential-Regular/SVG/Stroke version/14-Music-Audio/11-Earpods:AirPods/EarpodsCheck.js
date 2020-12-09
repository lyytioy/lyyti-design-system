import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-check_svg__a"
      d="M6.75 10.745V9M3.75 5.625A.375.375 0 104.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-check_svg__a"
      d="M9.75 12.75V6a5.25 5.25 0 00-9-3.674v7.348a5.255 5.255 0 006 1.071V22.5a.75.75 0 00.75.75H9a.75.75 0 00.75-.75V21M18.75 5.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-check_svg__a"
      d="M21.75 9.674V2.326a5.25 5.25 0 00-9 3.674v3.75M23.25 17.25a6 6 0 11-6-6"
    />,
    <path
      className="earpods-check_svg__a"
      d="M23.25 12.75l-5.47 5.469a.749.749 0 01-1.06 0L15 16.5"
    />
  );

export default SvgEarpodsCheck;
