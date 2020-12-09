import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-bold_svg__a"
      d="M3.75 23.248h9.75a6.75 6.75 0 000-13.5h.75a4.5 4.5 0 100-9H3.75M6.75.748v22.5M13.5 9.748H6.75"
    />
  );

export default SvgTextBold;
