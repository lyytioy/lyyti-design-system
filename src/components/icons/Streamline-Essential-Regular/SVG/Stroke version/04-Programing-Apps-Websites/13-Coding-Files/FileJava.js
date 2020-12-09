import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileJava = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-java_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-java_svg__a"
      d="M.749 19.5V2.253a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.44l5.871 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-java_svg__a"
      d="M20.249 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M5.249 15.753v6a1.5 1.5 0 01-1.5 1.5h-1.5M8.249 23.253v-6a1.5 1.5 0 013 0v6M8.249 20.253h3M20.249 23.253v-6a1.5 1.5 0 013 0v6M20.249 20.253h3M14.249 15.753V18.3a8.932 8.932 0 001.5 4.954 8.932 8.932 0 001.5-4.954v-2.547"
    />
  );

export default SvgFileJava;
