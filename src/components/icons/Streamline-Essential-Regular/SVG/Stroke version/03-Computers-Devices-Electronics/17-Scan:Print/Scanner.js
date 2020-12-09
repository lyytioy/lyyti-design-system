import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScanner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scanner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="scanner_svg__a"
      d="M20.25 23.25a3 3 0 003-3v-.75H.75v.75a3 3 0 003 3zM5.25 9.75a1.5 1.5 0 00-1.342.829L.75 19.5h22.5l-3.158-8.921a1.5 1.5 0 00-1.342-.829z"
    />,
    <path
      className="scanner_svg__a"
      d="M3.908 10.579L2.545 2.5A1.5 1.5 0 014.024.75h15.952a1.5 1.5 0 011.479 1.75l-1.363 8.079M18 16.5H6l.75-3.75h10.5L18 16.5z"
    />
  );

export default SvgScanner;
