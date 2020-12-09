import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-flash_svg__a"
      d="M16.49 9.378a26.308 26.308 0 01-4.49.373C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.26 2.014 11.26 4.5A2.915 2.915 0 0121.743 7.5M23.26 11.251v-6"
    />,
    <path
      className="database-flash_svg__a"
      d="M.75 5.251v6c0 2.374 4.6 4.318 10.424 4.488"
    />,
    <path
      className="database-flash_svg__a"
      d="M.75 11.251v6c0 2.78 6.3 4.971 13.5 4.412M20.261 9.751l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.91-6.883a.374.374 0 00-.285-.617h-2.625z"
    />
  );

export default SvgDatabaseFlash;
