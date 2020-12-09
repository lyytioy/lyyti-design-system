import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileCompress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-compress_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-compress_svg__a"
      d="M14.232 12.5h2.786M14.232 10.5h2.786M14.214 8.5H17M4 .5h4M6 .5v3M4 20.5h4M6 20.5v-3M3 3.5a1 1 0 00-1 1v3a1 1 0 001 1h3.5a1 1 0 001-1 1 1 0 011-1H19a1 1 0 001-1v-1a1 1 0 00-1-1zM3 17.5a1 1 0 01-1-1v-3a1 1 0 011-1h3.5a1 1 0 011 1 1 1 0 001 1H19a1 1 0 011 1v1a1 1 0 01-1 1zM14 17.5h4v3l4 1v2H10v-2l4-1v-3z"
    />
  );

export default SvgZipFileCompress;
