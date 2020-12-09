import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSelect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-select_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-select_svg__a"
      d="M19.5 7.5c-.009 2.355 1.14 3.694 3.75 3.75-2.423-.009-3.627 1.291-3.75 3.75-.021-2.32-1.06-3.753-3.75-3.75 2.407-.034 3.741-1.195 3.75-3.75zM11.283.75c-.013 3.318 1.605 5.2 5.282 5.283-3.413-.013-5.109 1.818-5.282 5.282C11.254 8.047 9.789 6.028 6 6.033c3.39-.048 5.27-1.684 5.283-5.283zM.75 19.728v2.348a1.177 1.177 0 001.174 1.174h2.348M4.272.75H1.924A1.177 1.177 0 00.75 1.924v2.348M23.25 4.272V1.924A1.177 1.177 0 0022.076.75h-2.348M19.728 23.25h2.348a1.177 1.177 0 001.174-1.174v-2.348M16.6 17.364a7.125 7.125 0 01-12.85-4.157A6.963 6.963 0 014.94 9.3"
    />
  );

export default SvgRetouchSelect;
