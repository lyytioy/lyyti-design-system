import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentDecrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-decrease_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="indent-decrease_svg__a"
      d="M23.25 2.748H.75M23.25 7.248h-12M23.25 11.748h-12M23.25 16.248h-12M23.25 20.748H.75M2.031 11.526L6.97 6.587a.75.75 0 011.28.53V17a.75.75 0 01-1.28.53l-4.939-4.943a.75.75 0 010-1.061z"
    />
  );

export default SvgIndentDecrease;
