import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hash_svg__a"
      d="M2.5 8.498h21M.5 15.498h21M6.521 23.498l4.01-23M13.521 23.498l4.01-23"
    />
  );

export default SvgHash;
