import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="earpods-remove_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="earpods-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5M6.75 10.745V9M3.75 5.625A.375.375 0 104.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-remove_svg__a"
      d="M9.75 12.75V6a5.25 5.25 0 00-9-3.674v7.348a5.255 5.255 0 006 1.071V22.5a.75.75 0 00.75.75H9a.75.75 0 00.75-.75V21M18.75 5.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-remove_svg__a"
      d="M21.75 9.674V2.326a5.25 5.25 0 00-9 3.674v3.75"
    />
  );

export default SvgEarpodsRemove;
