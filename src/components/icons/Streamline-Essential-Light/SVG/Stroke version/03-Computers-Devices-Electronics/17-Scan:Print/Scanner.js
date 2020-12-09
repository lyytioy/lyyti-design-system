import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScanner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scanner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="scanner_svg__a"
      d="M23.5 19.5c0 2.762-2.238 4-5 4h-13c-2.762 0-5-1.238-5-4zM.5 19.5l4-10h15l4 10M21.5 2.5h-19l2 7h15l2-7zM2.5 2.5a2 2 0 012-2h15a2 2 0 012 2z"
    />,
    <path
      className="scanner_svg__a"
      d="M17.5 11.5h-11l-2 6h15l-2-6zM16.25 21.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.25 21.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgScanner;
