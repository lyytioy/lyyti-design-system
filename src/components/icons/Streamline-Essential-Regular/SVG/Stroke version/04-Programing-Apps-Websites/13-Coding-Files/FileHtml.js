import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileHtml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-html_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-html_svg__a"
      d="M.75 12.753v-10.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l5.872 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-html_svg__a"
      d="M20.25 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M.75 23.253v-7.5M3.75 23.253v-7.5M.75 20.253h3M8.25 23.253v-7.5M6.75 15.753h3M17.25 23.253v-7.5L15 19.503l-2.25-3.75v7.5M20.25 15.753v6a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgFileHtml;
