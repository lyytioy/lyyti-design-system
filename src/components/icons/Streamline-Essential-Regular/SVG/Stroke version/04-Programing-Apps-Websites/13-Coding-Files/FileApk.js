import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileApk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-apk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-apk_svg__a"
      d="M5.252 23.253h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l5.872 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-apk_svg__a"
      d="M20.252 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M8.252 23.253v-6a1.5 1.5 0 013 0v6M8.252 20.253h3M14.252 23.253v-7.5M14.252 15.753H15a2.25 2.25 0 010 4.5h-.75M20.252 23.253v-7.5M23.252 23.253l-3-3.75 3-3.75"
    />
  );

export default SvgFileApk;
