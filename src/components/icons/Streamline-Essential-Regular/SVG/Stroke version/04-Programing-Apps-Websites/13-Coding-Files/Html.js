import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHtml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".html_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="html_svg__a"
      d="M.738 3.754h22.5M.738 20.254h22.5M.738 15.753v-7.5M3.738 15.753v-7.5M.738 12.753h3M8.238 15.754v-7.5M6.738 8.254h3M17.238 15.753v-7.5l-2.25 3.75-2.25-3.75v7.5M20.238 8.253v6a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgHtml;
