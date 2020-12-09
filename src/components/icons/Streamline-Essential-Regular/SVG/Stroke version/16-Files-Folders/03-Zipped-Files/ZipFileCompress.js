import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileCompress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-compress_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-compress_svg__a"
      d="M6.75 13.5V12a1.5 1.5 0 00-1.5-1.5h-1.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5H19.5a1.5 1.5 0 000-3zM17.25 19.5v-3h-3v3l-4.5.75v2.25h12v-2.187l-4.5-.813zM16.5 10.5h3M16.5 7.5h3M21 3a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 3v3a1.5 1.5 0 001.5 1.5h1.5A1.5 1.5 0 006.75 6V4.5H19.5A1.5 1.5 0 0021 3z"
    />
  );

export default SvgZipFileCompress;
