import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHtml1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".html-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="html-1_svg__a"
      d="M23.238 21v.75a1.5 1.5 0 01-1.5 1.5h-19.5a1.5 1.5 0 01-1.5-1.5V21M.738 7.5V2.254a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5V7.5M.738 18.004v-7.5M3.738 18.004v-7.5M.738 15.004h3M8.238 18.004v-7.5M6.738 10.504h3M17.238 18.004v-7.5l-2.25 3.75-2.25-3.75v7.5M20.238 10.5v6a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgHtml1;
