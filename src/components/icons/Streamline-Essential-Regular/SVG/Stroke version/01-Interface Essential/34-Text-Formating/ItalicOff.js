import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgItalicOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".italic-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="italic-off_svg__a"
      d="M5.25.748H21A2.25 2.25 0 0123.25 3v.75M10.745 15.787l-.995 7.461M12.75.748l-.893 6.695M5.25 23.248h9M.75.748l22.5 22.5"
    />
  );

export default SvgItalicOff;
