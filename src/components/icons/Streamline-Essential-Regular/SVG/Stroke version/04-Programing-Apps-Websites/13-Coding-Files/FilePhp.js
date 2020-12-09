import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilePhp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-php_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-php_svg__a"
      d="M4.5 23.254H2.25a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-php_svg__a"
      d="M20.25 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M7.5 23.254v-7.5M7.5 15.754h.75a2.25 2.25 0 010 4.5H7.5M19.5 23.254v-7.5M19.5 15.754h.75a2.25 2.25 0 010 4.5h-.75M13.5 23.254v-7.5M16.5 23.254v-7.5M13.5 20.254h3"
    />
  );

export default SvgFilePhp;
