import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandDrag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-drag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hand-drag_svg__a"
      d="M16.5 6.747v-1.5a1.5 1.5 0 00-3 0V4.5a1.5 1.5 0 00-3 0v.75a1.5 1.5 0 00-3 0v5.25a3 3 0 00-3 3 7.017 7.017 0 001.308 4.081l1.1 1.535A4.5 4.5 0 0010.566 21h3.813a5.121 5.121 0 005.121-5.124V6.747a1.5 1.5 0 00-3 0zM7.5 10.497v2.25M10.5 8.997v-3.75M13.5 8.997v-3.75M16.5 8.997v-2.25"
    />
  );

export default SvgHandDrag;
