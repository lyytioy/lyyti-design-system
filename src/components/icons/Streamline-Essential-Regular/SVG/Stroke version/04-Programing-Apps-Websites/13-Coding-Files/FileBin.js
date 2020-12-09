import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-bin_svg__a"
      d="M8.241 23.253h-6a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.44l5.87 5.871a1.5 1.5 0 01.44 1.061v4.628"
    />,
    <path
      className="file-bin_svg__a"
      d="M20.241 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M11.241 23.253v-7.5M11.241 15.753h1.5a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5h-1.5M11.241 19.5h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M17.241 23.254v-7.5M20.241 23.254v-7.5l3 7.5v-7.5"
    />
  );

export default SvgFileBin;
