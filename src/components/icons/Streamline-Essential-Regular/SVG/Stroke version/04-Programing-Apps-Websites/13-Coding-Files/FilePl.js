import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilePl = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-pl_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-pl_svg__a"
      d="M11.249 23.253h-9a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l5.872 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-pl_svg__a"
      d="M20.249 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M14.249 23.253v-7.5M14.249 15.753H15a2.25 2.25 0 010 4.5h-.75M20.249 15.753v6a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgFilePl;
