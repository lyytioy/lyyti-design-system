import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileYm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-ym_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-ym_svg__a"
      d="M9.744 23.254h-7.5a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L19.8 7.064a1.5 1.5 0 01.44 1.061v4.629"
    />,
    <path
      className="file-ym_svg__a"
      d="M20.244 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M12.744 15.754V18a1.5 1.5 0 103 0v-2.25M14.244 19.504v3.75M23.244 23.254v-7.5l-2.25 3.75-2.25-3.75v7.5"
    />
  );

export default SvgFileYm;
