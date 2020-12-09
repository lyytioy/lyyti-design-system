import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="indent-right_svg__a"
      d="M17.25 12.748h6M20.25 15.748l-3-3 3-3M14.25 2.248v21M11.25 3.748H.75M11.25 8.248h-7.5M11.25 12.748H.75M11.25 17.248h-7.5M11.25 21.748H.75"
    />
  );

export default SvgIndentRight;
