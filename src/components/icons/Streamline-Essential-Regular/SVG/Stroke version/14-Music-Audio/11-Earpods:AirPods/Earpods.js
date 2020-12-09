import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpods = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods_svg__a"
      d="M6.75 10.745V9M3.75 5.625A.375.375 0 104.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods_svg__a"
      d="M9.75 6v16.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V10.745a5.255 5.255 0 01-6-1.071V2.326A5.25 5.25 0 019.75 6zM17.25 10.745V9M20.25 5.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods_svg__a"
      d="M14.25 6v16.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V10.745a5.255 5.255 0 006-1.071V2.326a5.25 5.25 0 00-9 3.674z"
    />
  );

export default SvgEarpods;
