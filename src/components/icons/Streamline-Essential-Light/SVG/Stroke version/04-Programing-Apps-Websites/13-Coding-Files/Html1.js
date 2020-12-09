import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHtml1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".html-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="html-1_svg__a"
      d="M5.5 11.504v8M1.5 19.504v-8M1.5 15.504h4M13.5 19.504v-8l2 4 2-4v8M19.5 11.5V18a1.5 1.5 0 001.5 1.5h2.5M7.5 11.504h4M9.5 11.504v8M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1M.5 8.5v-7a1 1 0 011-1h21a1 1 0 011 1v7"
    />
  );

export default SvgHtml1;
