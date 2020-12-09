import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextStyle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-style_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-style_svg__a"
      d="M1.5 3.748V3A2.25 2.25 0 013.75.748h16.5A2.25 2.25 0 0122.5 3v.75M12 .748v22.5M7.5 23.248h9"
    />
  );

export default SvgTextStyle;
