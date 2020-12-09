import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCsv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-csv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-csv_svg__a"
      d="M5.251 23.254h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5H12.88a1.5 1.5 0 011.06.439l5.872 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-csv_svg__a"
      d="M20.251 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M11.251 15.754a3 3 0 00-3 3v1.5a3 3 0 003 3M17.251 15.754h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M20.251 15.754V18.3a8.935 8.935 0 001.5 4.955 8.935 8.935 0 001.5-4.955v-2.546"
    />
  );

export default SvgFileCsv;
