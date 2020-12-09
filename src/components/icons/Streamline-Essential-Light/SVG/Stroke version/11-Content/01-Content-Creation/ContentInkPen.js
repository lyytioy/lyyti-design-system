import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentInkPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-ink-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-ink-pen_svg__a"
      d="M7.5 18.713v2.143a1.041 1.041 0 01-.776 1.007L.5 23.5l1.637-6.219a1.041 1.041 0 011.006-.781h2.144M23.378 1.456a.595.595 0 00-.834-.834l-12.1 9.254-3.684 5.155 2.209 2.209 5.155-3.682zM6.391 17.609L4.55 19.45"
    />,
    <path
      className="content-ink-pen_svg__a"
      d="M6.76 15.032l2.209 2.209-1.473 1.473-2.21-2.21z"
    />
  );

export default SvgContentInkPen;
