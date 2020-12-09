import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPens = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pens_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pens_svg__a"
      d="M7.5 18c0 1.365-2.5 5.5-2.5 5.5S2.5 19.365 2.5 18a2.5 2.5 0 015 0zM4.999 19v4.5"
    />,
    <path
      className="content-pens_svg__a"
      d="M2.999 8.5h4v7h-4zM3 1.5a2 2 0 00-2 2v8"
    />,
    <path
      className="content-pens_svg__a"
      d="M2.999.5h4v8h-4zM10 17.5l2 6 2-6v-15a2 2 0 00-4 0zM9.998 4.5h4.001M9.998 17.5h4M16.999 8.5H21v9.999h-4.001zM21 1.5a2 2 0 012 2v8M19.001 21.5v2M17 .5h4v8h-4z"
    />,
    <path className="content-pens_svg__a" d="M18.001 18.499h2V21.5h-2z" />
  );

export default SvgContentPens;
