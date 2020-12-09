import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="house-1_svg__a"
      d="M3.753 13.944v8.25h6v-6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v6h6v-8.25M.753 12.444L10.942 2.255a1.5 1.5 0 012.122 0l10.189 10.189"
    />
  );

export default SvgHouse1;
