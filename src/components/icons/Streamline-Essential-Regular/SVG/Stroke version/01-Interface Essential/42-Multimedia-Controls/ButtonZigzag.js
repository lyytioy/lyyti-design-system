import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="button-zigzag_svg__a" d="M18.75.748l4.5 4.5-4.5 4.5" />,
    <path
      className="button-zigzag_svg__a"
      d="M.75 23.248h18a4.5 4.5 0 000-9H5.25a4.5 4.5 0 010-9h18"
    />
  );

export default SvgButtonZigzag;
