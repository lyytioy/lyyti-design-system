import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileAsp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-asp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-asp_svg__a"
      d="M5.244 23.254h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L19.8 7.064a1.5 1.5 0 01.44 1.061v4.629"
    />,
    <path
      className="file-asp_svg__a"
      d="M20.244 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M8.244 23.254v-6a1.5 1.5 0 013 0v6M8.244 20.254h3M17.244 15.754h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M20.244 23.254v-7.5M20.244 15.754h.75a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgFileAsp;
